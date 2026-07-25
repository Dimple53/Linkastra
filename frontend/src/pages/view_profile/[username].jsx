import {useSearchParams} from "next/navigation";
import React from "react";

export default function ViewProfilePage(){
	const searchParams = useSearchParams();


	console.log("View Profile Page");
	return (
		<div>
			<h1>View Profile Page</h1>
		</div>
	);
};

export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}