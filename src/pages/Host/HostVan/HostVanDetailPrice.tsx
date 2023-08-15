import { useOutletContext  } from "react-router-dom";
import { Data } from "../../Van/Vans";


const HostVanDetainPrice = () => {
	const {price} = useOutletContext<Data>()
	return <h1> ${price}/day</h1>;
};

export default HostVanDetainPrice;
