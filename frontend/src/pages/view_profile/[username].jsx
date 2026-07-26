import {useSearchParams} from "next/navigation";
import React, { useEffect } from "react";

export default function ViewProfilePage(){
	const searchParams = useSearchParams();

	useEffect(() => {
		console.log("From view: View Profile Page");
	});

	return (
		<div>
			<h1>View Profile Page</h1>
		</div>
	);
};

export async function getServerSideProps() {
	console.log("From view");
	return {
		props: {}, // will be passed to the page component as props
	};
}