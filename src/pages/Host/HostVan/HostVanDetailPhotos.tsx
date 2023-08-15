import { useOutletContext } from "react-router-dom";
import { Data } from "../../Van/Vans";

const HostVanDetailPhotos = () => {
	const { imageUrl } = useOutletContext<Data>();

	return <img src={imageUrl} className="host-van-detail-image" />;
};

export default HostVanDetailPhotos;
