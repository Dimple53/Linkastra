import { clientServer } from "@/config";
import {useSearchParams} from "next/navigation";
import React, { useEffect } from "react";

export default function ViewProfilePage({ userProfile }) {
	const searchParams = useSearchParams();

	useEffect(() => {
		console.log("From view: View Profile Page");
	});

	return (
		<div>
			{userProfile.userId.name}

		</div>
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