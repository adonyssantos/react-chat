// import { db } from "./config/firebase";
import Button from "./components/Button";
import { signInWithGoogle, signOut } from "./login";

function App() {
  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}> Sing in with Google</Button>
          <p> Bienvenidos al CHAT!</p>
        </>
      ) : (
        <Button onClick={signInWithGoogle}> Sing in with Google </Button>
      )}
    </div>
  );
}

export default App;
