import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type Data = {
	id: number;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: string;
	hostId:string
};
type Vans = {
	vans: Data[];
};

export default function Vans() {
	const [vans, setVans] = useState<Data[]>([]);

	const fetchDate = async () => {
		try {
			const response: AxiosResponse<Vans> = await axios.get("/api/vans");
			setVans(response.data.vans);
		} catch (err) {
			const e = err as AxiosError;
			console.log(e.status);
		}
	};
	useEffect(() => {
		fetchDate();
	}, []);

	const vanELements = vans.map((van) => (
		<div key={van.id} className="van-tile">
			<Link to={`/vans/${van.id}`}>
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
			<div className="van-list">
				{vans.length ? vanELements : <h2>Loading...</h2>}
			</div>
		</div>
	);
}
