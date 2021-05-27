import { Channel, Button } from "./components/";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";
import renderLoading from "./helpers/renderLoading";
import fixSroll from "./helpers/fixSroll";
import { signInWithGoogle, signOut } from "./security";

function App() {
  const { itializing, user } = useAuthState(firebase.auth());
  return (
    <div>
      {renderLoading(itializing)}
      {user ? (
        <>
          <header className="menu">
            <h1>Infinity Chat</h1>
            <Button onClick={signOut}> Salir </Button>
          </header>
          <Channel user={user} />
          {fixSroll()}
        </>
      ) : (
        <>
          <Button onClick={signInWithGoogle}>Iniciar Sesión</Button>
        </>
      )}
    </div>
  );
}

export default App;
