import { useOutletContext } from "react-router-dom";
import {Data} from "../../../../api"

const HostVanDetailPhotos = () => {
	const { imageUrl } = useOutletContext<Data>();

	return (
		<a href={imageUrl}>
			<img src={imageUrl} className="host-van-detail-image" />
		</a>
	);
};

export default HostVanDetailPhotos;
