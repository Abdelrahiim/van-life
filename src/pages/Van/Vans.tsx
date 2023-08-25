/* eslint-disable react-refresh/only-export-components */

import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { Data, fetchVans } from "../../../api";




export const loader = async () => {
	return fetchVans()
};

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get("type");

	const vans = useLoaderData() as Data[];

	const displayedVans = typeFilter
		? vans.filter((van) => van.type.toLowerCase() === typeFilter)
		: vans;
	// setVans(displayedVans)
	const vanELements = displayedVans.map((van) => (
		<div key={van.id} className="van-tile">
			<Link to={van.id} state={{ search: searchParams.toString() }}>
				<img src={van.imageUrl} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>{van.description}</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
		</div>
	));
	return (
		<div className="van-list-container">
			<h1>Explore Our Van Options</h1>
			<div className="van-list-filter-buttons">
				<Link
					className={`van-type simple ${
						typeFilter === "simple" && "selected"
					}`}
					to="?type=simple"
				>
					Simple
				</Link>
				<button
					className={`van-type rugged  ${
						typeFilter === "rugged" && "selected"
					}`}
					onClick={() => setSearchParams("type=rugged")}
				>
					Rugged
				</button>

				<button
					className={`van-type luxury ${
						typeFilter === "luxury" && "selected"
					}`}
					onClick={() => setSearchParams({ type: "luxury" })}
				>
					Luxury
				</button>
				{typeFilter && (
					<Link className="van-type clear-filters" to=".">
						Clear Filters
					</Link>
				)}
			</div>
			<div className="van-list">{vanELements}</div>
		</div>
	);
}
