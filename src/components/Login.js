import { signInWithGoogle } from "../login";
import Button from "./Button";
import '../styles/Login.css';

const Login = () => {
	return (
		<main>
			<h2>¡Bienvenidos!</h2>
			<img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" alt=""></img>
			<Button onClick={signInWithGoogle}>Iniciar Sesión</Button>
		</main>
	)
};

export default Login;
