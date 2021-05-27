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
          <header>
            <h1>Infinity Chat</h1>
            <Button styles="btn logout" onClick={signOut}> Salir </Button>
          </header>
          <Channel user={user} />
          {fixSroll()}
        </>
      ) : (
        <div className="btn-container-login">
          <Button styles="btn login" onClick={signInWithGoogle}>
            Iniciar Sesión
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
