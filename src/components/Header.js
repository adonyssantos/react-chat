import { signOut } from "../login";
import Button from "./Button";
import Logo from "./Logo";
import "../styles/Header.css";
import { useAuthState } from "../hooks";
import { firebase } from "../config/firebase";

const Header = () => {
  const { user } = useAuthState(firebase.auth());
  if (user) {
    return (
      <header className="menu">
        <Logo />
        <h1>Infinity Chat</h1>
        <Button onClick={signOut}> Salir </Button>
      </header>
    );
  } else {
    return (
      <header className="menu">
        <Logo />
        <h1>Infinity Chat</h1>
        <div className="invisible-btn"></div>
      </header>
    );
  }
};

export default Header;
