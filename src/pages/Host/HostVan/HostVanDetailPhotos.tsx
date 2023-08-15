import { useOutletContext } from "react-router-dom";
import { Data } from "../../Van/Vans";

const HostVanDetailPhotos = () => {
	const { imageUrl, name, } = useOutletContext<Data>();
	return <img src={imageUrl} alt={`Photo of ${name}`} width={250} />;
};

export default HostVanDetailPhotos;
