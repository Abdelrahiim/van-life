import {
	useLoaderData,
	Form,
	ActionFunctionArgs,
	LoaderFunctionArgs,
	redirect,
	useActionData,
	useNavigation
} from "react-router-dom";
import { LoginData, loginUser } from "../../api";
import { AxiosError } from "axios";

enum Status {
	Idle = "idle",
	Submitting = "submitting",
	Loading = "loading"
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: LoaderFunctionArgs) => {
	return new URL(request.url).searchParams.get("msg");
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: ActionFunctionArgs) => {
	const formData: FormData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const pathName = new URL(request.url).searchParams.get("redirectTo") || '/host';
	try {
		const date = await loginUser({ email, password } as LoginData);
		localStorage.setItem("loggedIn", "true");
		console.log(pathName)
		return redirect(pathName);
	} catch (e) {
		return e;
	}
};

const Login = () => {
	// const [status, setStatus] = useState<Status>(Status.Idle);
	// const [error, setError] = useState<AxiosError<{ message: string }>>();
	const msg = useLoaderData() as string | null;
	const errMsg = useActionData() as AxiosError<{ message: string }>;
	const navigation = useNavigation();
	const status = navigation.state

	// const navigate = useNavigate();

	// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = e.target;
	// 	setLoginFormData((prev) => ({ ...prev, [name]: value }));
	// };

	// function handleSubmit(e: FormEvent<HTMLFormElement>) {
	// 	e.preventDefault();
	// 	setStatus(Status.Submitting);
	// 	setError(undefined);
	// 	loginUser(loginFormData)
	// 		.then(() => navigate("/host", { replace: true }))
	// 		.catch((error: AxiosError<{ message: string }>) => setError(error))
	// 		.finally(() => {
	// 			setStatus(Status.Idle);
	// 		});
	// }
	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{msg && (
				<h2 style={{ backgroundColor: "coral", color: "white" }}>
					{msg}
				</h2>
			)}
			{errMsg && (
				<h2 style={{ color: "red" }}>
					{errMsg.response?.data.message} {errMsg.response?.status}{" "}
					{errMsg.response?.statusText}
				</h2>
			)}
			<Form replace className="login-form" method="post">
				<input name="email" type="email" placeholder="Email Address" />
				<input name="password" type="password" placeholder="Password" />

				<button disabled={status === Status.Submitting} type="submit">
					{status !== Status.Submitting ? "Log In" : "Logging In ..."}
				</button>
			</Form>
		</div>
	);
};

export default Login;
