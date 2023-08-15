import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
	const activeStyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	return (
		<>
			<nav className="host-nav">
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="."
					end
				>
					DashBoard
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="vans"
				>
					Vans
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="income"
				>
					Income
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="reviews"
				>
					Reviews
				</NavLink>
			</nav>

			<Outlet />
		</>
	);
};

export default HostLayout;
