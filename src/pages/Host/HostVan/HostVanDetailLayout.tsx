import { Link, LoaderFunctionArgs, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { Data, fetchHostVans } from "../../../../api";
import { requireAuth } from "../../../../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export const loader = async ({ params , request }: LoaderFunctionArgs) => {

	const returnValue = (await requireAuth(request))
		? await requireAuth(request)
		: await fetchHostVans(params.id);
	return returnValue;
};

const HostVanDetailLayout = () => {
	const activeStyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	const currentVan = useLoaderData() as Data;

	return (
		<div>
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
					<Outlet context={currentVan satisfies Data} />
				</div>
			</section>
		</div>
	);
};

export default HostVanDetailLayout;
