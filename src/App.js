//import { db } from "./config/firebase";
import { Button, Channel } from "./components/";
import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";
//console.log(db);

function App() {
  const { user, itializing } = useAuthState(firebase.auth());
  const renderLoading = () => {
    if (itializing)
      return (
        <div>
          <h3>Loadinng...</h3>
        </div>
      );
  };

  return (
    <div>
      {renderLoading()}
      {user ? (
        <>
          <Button onClick={signOut}> Logout</Button>
          <p> Bienvenidos al CHAT!</p>
          <Channel user={user} />
        </>
      ) : (
        <Button onClick={signInWithGoogle}> Sign in with Google </Button>
      )}
    </div>
  );
}

export default App;
