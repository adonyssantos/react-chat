import { googleAuthProvider, firebase } from "./config/firebase";


const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

    try{
      await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error (e.message);
    }
  }

  export default signInWithGoogle;