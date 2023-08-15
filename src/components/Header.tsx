import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header>
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<nav>
					<NavLink
						className={({ isActive }) => isActive ? "active-link":"" }
						to="host"
					>
						Host
					</NavLink>
					<NavLink
						className={({ isActive }) => isActive ? "active-link":"" }
						to="about"
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) => isActive ? "active-link":"" }
						to="vans"
					>
						Vans
					</NavLink>
				</nav>
			</header>
		</>
	);
};

export default Header;
