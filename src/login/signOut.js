import { firebase } from '../config/firebase';

const signOut = async () =>{
    try{
        await firebase.auth().signOut();
    
      } catch (e) {
        console.error (e);
      }
};


export default signOut;