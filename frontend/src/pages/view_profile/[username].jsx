import { BASE_URL, clientServer } from "@/config";
import DashboardLayout from "@/layout/dashboardLayout";
import UserLayout from "@/layout/userLayout";
import {useSearchParams} from "next/navigation";
import React, { useEffect } from "react";
import styles from "./styles.module.css";

export default function ViewProfilePage({ userProfile }) {
	const searchParams = useSearchParams();

	useEffect(() => {
		console.log("From view: View Profile Page");
	});

	return (
		<UserLayout>
			<DashboardLayout>
				<div className={styles.container}>
					<div className={styles.backDropContainer}>
						<img className={styles.backDropImage} src={`${BASE_URL}/${userProfile.userId.profilePicture}`} alt="backdrop" />

					</div>
					<div className={styles.profileContainer_details}>
						<div styles={{display: "flex", gap:"0.7rem"}}>
							<div styles={{ flex: "0.8" }}>

							</div>
							<div styles={{ display: "flex", width: "fit-content", alignItems: "center", gap: "1.2rem" }}>
								<h2>{userProfile.userId.name}</h2>
								<p style={{ color: "grey" }}>@{userProfile.userId.username}</p>

							</div>
						</div>

					</div>

				</div>
			</DashboardLayout>
		</UserLayout>
	);
};

export async function getServerSideProps(context) {
	console.log("From view");
	console.log(context.query.username);

	const request = await clientServer.get("/user/get_profile_based_on_username", {
		params: {
			username: context.query.username,
		},
	});
	const response = await request.data;
	console.log(response);
	return {
		props: { userProfile: request.data.profile}, // will be passed to the page component as props
	};
}