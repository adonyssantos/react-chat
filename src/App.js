import { db, googleAuthProvider, firebase } from "./config/firebase";
import Button from "./componens/Button";

function App() {
  const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

    try{
      await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error (e.message);
    }
    return (
      <div>
            <button onClick = {signInWithGoogle} > Sing in with Google </button>
      </div>
    )
  }

};

export default App;

