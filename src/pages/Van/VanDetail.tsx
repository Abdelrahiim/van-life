/* eslint-disable react-hooks/exhaustive-deps */
// import axios, { AxiosError, AxiosResponse } from "axios";
// import { useEffect, useState } from "react";
import {
	Link,
	useLoaderData,
	LoaderFunctionArgs,
	useLocation,
	defer,
	Await,
} from "react-router-dom";
import { Suspense } from "react";
import { Data, fetchVans } from "../../../api";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ params }: LoaderFunctionArgs) => {
	const vanData = fetchVans(params.id);
	return defer({ van: vanData });
};

/**
 * VanDetail Component
 * @returns JSX.Element
 */
const VanDetail = () => {
	const location = useLocation();
	const state = location.state as { search: string };

	const vanPromise = useLoaderData() as { van: Data };

	const search = state?.search || "";

	let searchString = search.split("=")[1];
	if (searchString !== undefined) {
		searchString = searchString[0].toUpperCase() + searchString.slice(1);
	}

	const renderVanDetailElement = (van: Data) => {
		return (
			<>
				<Link to={`..?${search}`} className="back-button">
					&larr; <span>Back to {searchString || "all "} Vans</span>
				</Link>
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>
						{van.type}
					</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			</>
		);
	};

	return (
		<div className="van-detail-container">
			<Suspense fallback={<h1>... Loading</h1>}>
				<Await resolve={vanPromise.van}>{renderVanDetailElement}</Await>
			</Suspense>
		</div>
	);
};

export default VanDetail;
