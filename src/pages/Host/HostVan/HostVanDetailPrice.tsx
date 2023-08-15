import { useOutletContext } from "react-router-dom";
import { Data } from "../../Van/Vans";

const HostVanDetainPrice = () => {
	const { price } = useOutletContext<Data>();
	return (
		<h3 className="host-van-price">
			${price}
			<span>/day</span>
		</h3>
	);
};

export default HostVanDetainPrice;
