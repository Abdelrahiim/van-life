import { useOutletContext } from "react-router-dom";
import {Data} from "../../../../api"

const HostVanDetailPricing = () => {
	const { price } = useOutletContext<Data>();
	return (
		<h3 className="host-van-price">
			${price}
			<span>/day</span>
		</h3>
	);
};

export default HostVanDetailPricing;
