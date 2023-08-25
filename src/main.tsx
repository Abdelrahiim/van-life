import ReactDOM from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	LoaderFunctionArgs,
	
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import "../server";
import Vans, { loader as vansLoader } from "./pages/Van/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Van/VanDetail";
import Layout from "./components/Layout";
import DashBoard from "./pages/Host/DashBoard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import React from "react";
import HostVans, {
	loader as hostVansLoader,
} from "./pages/Host/HostVan/HostVans";
import HostVanDetail from "./pages/Host/HostVan/HostVanDetail";
import HostVanDetailLayout, {
	loader as hostVanDetailLayoutLoader,
} from "./pages/Host/HostVan/HostVanDetailLayout";
import HostVanDetailPricing from "./pages/Host/HostVan/HostVanDetailPricing";
import HostVanDetailPhotos from "./pages/Host/HostVan/HostVanDetailPhotos";
import NotFound404Page from "./pages/NotFound404Page";

import ErrorPage from "./components/ErrorPage";
import Login ,{loader as loginLoader ,action as loginAction}  from "./pages/Login";
import { requireAuth } from "../utils";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />}  />
			<Route path="login" element={<Login />} loader={loginLoader}
			action={loginAction} />
			/** * - Vans Element */
			<Route path="vans">
				<Route
					index
					element={<Vans />}
					errorElement={<ErrorPage />}
					loader={vansLoader}
				/>
				<Route
					path=":id"
					element={<VanDetail />}
					loader={vanDetailLoader}
				/>
			</Route>
			/** * - Host Elements */
			<Route path="host" element={<HostLayout />}>
				<Route
					index
					element={<DashBoard />}
					loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)}
				/>

				<Route path="vans">
					/** * - Host Van Routes */
					<Route
						index
						element={<HostVans />}
						loader={hostVansLoader}
					/>
					/** * - Host Van Detail Routes */
					<Route
						path=":id"
						element={<HostVanDetailLayout />}
						loader={hostVanDetailLayoutLoader}
					>
						<Route index element={<HostVanDetail />} loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)} />
						<Route
							path="price"
							element={<HostVanDetailPricing />  }
							loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)}
						/>
						<Route
							path="photos"
							element={<HostVanDetailPhotos />}
							loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)}
						/>
					</Route>
				</Route>

				<Route
					path="reviews"
					element={<Reviews />}
					loader={async ({request}:LoaderFunctionArgs) => await requireAuth(request)}
				/>
			</Route>
			// 404 Route
			<Route path="*" element={<NotFound404Page />} />
		</Route>
	)
);

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
	return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
