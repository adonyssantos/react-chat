import { useEffect, useState, useRef } from "react";
import { db, firebase } from "../config/firebase";
import Message from './Message';
import '../styles/Channel.css';

const Channel = ({ user = null }) => {
  //console.log(user);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const query = db.collection('messages')
    .orderBy('createdAt')
    .limit(100);

const unsubscribe = query.onSnapshot(querySnapshot => {
    //Obtiene todos los mensajes desde la bd con su ID.
    const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
    // Actualizo los mensajes obtenidos desde la bd. 
    setMessages(data);

});
//CleanUp
return unsubscribe;

  }, [])

  const { uid, displayName, photoURL} = user;
  const [ newMessage, setNewMessage ]= useState('');
  const handleMessageOnChange = (e) =>{
    e.preventDefault();
    setNewMessage(e.target.value);
  }

  const messagesRef = db.collection('messages');

  const handleOnSubmit = e =>{
    e.preventDefault();

        const trimmedMessage = newMessage.trim(); 
        if (trimmedMessage) {
          messagesRef.add({
            text: trimmedMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL,
          });
          setNewMessage('');
        }
      };
  
const inputRef = useRef();
useEffect(() => {
    if (inputRef.current){
        inputRef.current.focus();
    }
}, [inputRef]);


    return(
        <>
                {messages.map(message => (
                    <p key={message.id}>
                        <Message {...message} />
                    </p>
                ))}

            <form
                onSubmit={handleOnSubmit}>
                    <input 
                    className ="mensaje"
                    ref={inputRef}
                    type="text"
                    value={newMessage}
                    onChange={handleMessageOnChange}
                    placeholder= "Escribe tu mensaje aqui..."
                    autoComplete="off"
                    />
                    <button className="btn-send"
                    type="submit"
                    disabled={!newMessage}
                    >
                        Enviar
                    </button>
                </form>
            </>
    );  
};

export default Channel;
