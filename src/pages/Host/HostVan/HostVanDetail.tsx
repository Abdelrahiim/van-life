/* eslint-disable react-hooks/exhaustive-deps */

import { useOutletContext } from "react-router-dom";
import { Data } from "../../Van/Vans";


const HostVanDetail = () => {
	const {name ,description ,type} = useOutletContext<Data>()
	
	return (
		<section className="host-van-detail-info">
            <h4>Name: <span>{name}</span></h4>
            <h4>Category: <span>{type}</span></h4>
            <h4>Description: <span>{description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
	);
};

export default HostVanDetail;
