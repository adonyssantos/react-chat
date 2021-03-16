import { signInWithGoogle } from "../login";
import Button from "./Button";

const Login = () => {
	return (
		<main class="container">
			<h1>¡Bienvenidos al Chat!</h1>
			<img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" alt=""></img>
			<Button onClick={signInWithGoogle}>Iniciar Sesión</Button>
		</main>
	)
};

export default Login;
