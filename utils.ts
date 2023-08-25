import { redirect } from "react-router-dom";

export async function requireAuth(request:Request) {
	const isLoggedIn = localStorage.getItem("loggedIn") ;
	
	const pathName = new URL(request.url).pathname
	console.log(isLoggedIn)
	if (!isLoggedIn) {
		// return <Redirect to="/login?msg=You need To Log In First" />
		return redirect(`/login?msg=You need To Log In First &redirectTo=${pathName}`, 302);
	}
	return null;
}
