/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Vans";
type Van = {
	vans: Data;
};
const VanDetail = () => {
	const [van, setVan] = useState<Data>();
	const { id } = useParams<{ id: string }>();

	const fetchVanDetail = async () => {
		try {
			const response: AxiosResponse<Van> = await axios.get(
				`/api/vans/${id}`
			);
			setVan(response.data.vans);
		} catch (err) {
			const e = err as AxiosError;
			console.log(e.status);
		}
	};

	useEffect(() => {
		fetchVanDetail();
	}, [id]);

	return (
		<div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
	);
};

export default VanDetail;
