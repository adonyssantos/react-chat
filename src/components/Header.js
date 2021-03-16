import { signOut } from "../login";
import Button from "./Button";
import Logo from './Logo'

const Header = () => {
	return (
		<>
			<div className='menu'>
				<Logo />
				<Button onClick={signOut}> Salir </Button>
			</div>
		</>
	)
};

export default Header;
