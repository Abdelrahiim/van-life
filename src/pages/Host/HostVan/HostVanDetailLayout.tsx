import axios, { AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { Data } from "../../Van/Vans";

const HostVanDetailLayout = () => {
	console.log("hello");
	const { id } = useParams<{ id: string }>();
	const [currentVan, setCurrentVan] = useState<Data>();
	const activeStyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	const fetchVanDetail = async (id: string) => {
		try {
			const response: AxiosResponse = await axios.get(
				`/api/host/vans/${id}`
			);
			setCurrentVan(response.data.vans);
		} catch (err) {
			const e = err as AxiosError;
			console.log(e.status);
		}
	};

	useEffect(() => {
		fetchVanDetail(id as string);
	}, [id]);

	return (
		<div>
			{currentVan ? (
				<section>
					<Link to=".." className="back-button">
						&larr; <span>Back to all vans</span>
					</Link>
					<div className="host-van-detail-layout-container">
						<div className="host-van-detail">
							<img src={currentVan.imageUrl} />
							<div className="host-van-detail-info-text">
								<i
									className={`van-type van-type-${currentVan.type}`}
								>
									{currentVan.type}
								</i>
								<h3>{currentVan.name}</h3>
								<h4>${currentVan.price}/day</h4>
							</div>
						</div>

						<nav className="host-van-detail-nav">
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								to="."
								end
							>
								Details
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								to="price"
							>
								Price
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								to="photos"
							>
								Photos
							</NavLink>
						</nav>
						<Outlet context={currentVan} />
					</div>
				</section>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default HostVanDetailLayout;
