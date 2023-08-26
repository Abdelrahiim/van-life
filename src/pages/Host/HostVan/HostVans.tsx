import { Data, fetchHostVans } from "../../../../api";
import {
	Link,
	LoaderFunctionArgs,
	defer,
	useLoaderData,
	Await,
} from "react-router-dom";
import { requireAuth } from "../../../../utils";
import { Suspense } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }: LoaderFunctionArgs) => {
	// const isLogged = false ;
	// if (!isLogged){
	// 	return redirect('/login')
	// }
	const returnValue = (await requireAuth(request))
		? await requireAuth(request)
		: defer({ vans: fetchHostVans() });
	return returnValue;
};

const HostVans = () => {
	// const [vans, setVans] = useState<Data[]>([]);

	const vansPromise = useLoaderData() as { vans: Data[] };
	// useEffect(() => {
	// 	fetchDate();
	// }, []);

	const renderHostVanElement = (vans: Data[]) => {
		const hostVans = vans.map((van) => (
			<Link to={van.id} key={van.id} className="host-van-link-wrapper">
				<div className="host-van-single" key={van.id}>
					<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
					<div className="host-van-info">
						<h3>{van.name}</h3>
						<p>${van.price}/day</p>
					</div>
				</div>
			</Link>
		));
		return <section>{hostVans}</section>;
	};

	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				<Suspense fallback={<h1> .... Loading</h1>}>
					<Await resolve={vansPromise.vans}>
						{renderHostVanElement}
					</Await>
				</Suspense>
			</div>
		</section>
	);
};

export default HostVans;
