import { BASE_URL, clientServer } from "@/config";
import DashboardLayout from "@/layout/dashboardLayout";
import UserLayout from "@/layout/userLayout";
import {useSearchParams} from "next/navigation";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/config/redux/action/postAction";

export default function ViewProfilePage({ userProfile }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const postReducer = useSelector((state) => state.postReducer);
	const dispatch = useDispatch();

	const authState = useSelector((state) => state.auth);

	const [userPosts, setUserPosts] = useState([]);

	const [isCurrentUserInConnection, setIsCurrentUserInConnection] = useState(false);

	const getUserPost = async () => {
		await dispatch(getAllPosts());
		await(getConnectionsRequest({token: localStorage.getItem("token")}));
	};

	useEffect(() => {
		let post = postReducer.posts.filter((post) => {

		return post.userId.username === router.query.username;
		});
		setUserPosts(post);
	}, [postReducer.posts]);

	useEffect(() => {
		console.log(authState.connections,userProfile.userId._id);
		postReducer.posts.filter((post) => {
			return post.userId.username === router.query.username;
		});
	}, []);

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
					<div className={styles.profileContainer__details}>
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