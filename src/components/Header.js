import { signOut } from "../login";
import Button from "./Button";
import Logo from './Logo'
import '../styles/Header.css';

const Header = () => {
	return (
		<header className="menu">
				<Logo />
				<h1>Infinity Chat</h1>
				<Button onClick={signOut}> Salir </Button>
		</header>
	)
};

export default Header;
