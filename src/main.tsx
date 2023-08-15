import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import "../server";
import Vans from "./pages/Van/Vans";
import VanDetail from "./pages/Van/VanDetail";
import Layout from "./components/Layout";
import DashBoard from "./pages/Host/DashBoard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import React from "react";
import HostVans from "./pages/Host/HostVan/HostVans";
import HostVanDetail from "./pages/Host/HostVan/HostVanDetail";
import HostVanDetailLayout from "./pages/Host/HostVan/HostVanDetailLayout";

import HostVanDetailPrice from "./pages/Host/HostVan/HostVanDetailPrice";
import HostVanDetailPhotos from "./pages/Host/HostVan/HostVanDetailPhotos";

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					/** * - Vans Element */
					<Route path="vans">
						<Route index element={<Vans />} />
						<Route path=":id" element={<VanDetail />} />
					</Route>
					/** * - Host Elements */
					<Route path="host" element={<HostLayout />}>
						<Route index element={<DashBoard />} />
						<Route path="income" element={<Income />} />
						<Route path="vans">
							/** * - Host Van Routes */
							<Route index element={<HostVans />} />
							/** * - Host Van Detail Routes */
							<Route path=":id" element={<HostVanDetailLayout />}>
								<Route index element={<HostVanDetail />} />
								<Route
									path="price"
									element={<HostVanDetailPrice />}
								/>
								<Route
									path="photos"
									element={<HostVanDetailPhotos />}
								/>
							</Route>
						</Route>

						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
