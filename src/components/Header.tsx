import { Link, NavLink } from "react-router-dom";
import { AvatarIcon } from "../assets/images";

const Header = () => {

	const activeStyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	return (
		<>
			<header>
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<nav>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="host"
					>
						Host
					</NavLink>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="about"
					>
						About
					</NavLink>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="vans"
					>
						Vans
					</NavLink>
					<Link to="login" className="login-link">
                    <img 
                        src={AvatarIcon} 
                        className="login-icon"
                    />
                </Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
