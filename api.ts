import axios, { AxiosResponse, AxiosError } from "axios";


/**
 * API Return Data Type
 */
export type Data = {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: string;
	hostId: string;
};

/**
 * Van Array Response Type
 */
type Vans = {
	vans: Data[];
};

/**
 * single Van Response Type
 */
type Van = {
	vans: Data;
};
/**
 * fetch All Vans From API
 * @returns Vans Data Array
 */
export const fetchVans = async (id?: string) => {
	const url = id ? `/api/vans/${id}` : "/api/vans";
	try {
		const response: AxiosResponse<Vans | Van> = await axios.get(url);
		return response.data.vans;
	} catch (err) {
		const e = err as AxiosError;
		throw e;
	}
};
export interface LoginData {
	email: string;
	password: string;
}

/**
 * Fetch Host Van Data
 * @param id 
 * @returns 
 */
export const fetchHostVans = async (id?: string) => {
	const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
	try {
		const response: AxiosResponse<Vans> = await axios.get(url);

		return response.data.vans;
	} catch (err) {
		const e = err as AxiosError;
		throw e;
	}
};

// export const fetchVanDetail = async (id:string) => {
// 	try {
// 		const response: AxiosResponse<Van> = await axios.get(
// 			`/api/vans/${id}`
// 		);
// 		return response.data.vans

// 	} catch (err) {
// 		const e = err as AxiosError;
// 		throw(e)
// 	}
// };

type LogInResponseData = {
	user:{ id: string, email: string, password: string, name: string } ;
	token:string
}

export const loginUser = async (credentials:LoginData) => {
	try {
		const response: AxiosResponse<LogInResponseData> = await axios.post("/api/login",
			credentials
		);

		return response.data 
	} catch (err) {
		const e = err as AxiosError;
		// console.log(e.response?.data)
		throw e
	}

}