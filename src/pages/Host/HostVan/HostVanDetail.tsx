/* eslint-disable react-hooks/exhaustive-deps */

import { useOutletContext } from "react-router-dom";
import { Data } from "../../Van/Vans";


const HostVanDetail = () => {
	const {name ,description ,type} = useOutletContext<Data>()
	
	return (
		<section>
			<p> Name : {name}</p>
			<p> Description : {description}</p>
			<p> Type : {type}</p>
			bb
		</section>
	);
};

export default HostVanDetail;
