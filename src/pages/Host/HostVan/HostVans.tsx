import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Data } from "../../Van/Vans";
import { Link } from "react-router-dom";

type Vans = {
	vans: Data[];
};

const HostVans = () => {
	const [vans, setVans] = useState<Data[]>([]);

	const fetchDate = async () => {
		try {
			const response: AxiosResponse<Vans> = await axios.get(
				"/api/host/vans"
			);
			console.log(response);
			setVans(response.data.vans);
		} catch (err) {
			const e = err as AxiosError;
			console.log(e.status);
		}
	};
	useEffect(() => {
		fetchDate();
	}, []);
	const hostVansEls = vans.map((van) => (
		<Link
			to={`/host/vans/${van.id}`}
			key={van.id}
			className="host-van-link-wrapper"
		>
			<div className="host-van-single" key={van.id}>
				<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
				<div className="host-van-info">
					<h3>{van.name}</h3>
					<p>${van.price}/day</p>
				</div>
			</div>
		</Link>
	));

	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				{vans.length > 0 ? (
					<section>{hostVansEls}</section>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</section>
	);
};

export default HostVans;
