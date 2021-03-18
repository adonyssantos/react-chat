import { useEffect, useState, useRef } from "react";
import { db, firebase } from "../config/firebase";
import Message from "./Message";
import "../styles/Channel.css";
import fixSroll from "../functions/fixSroll";

const Channel = ({ user = null }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const query = db.collection("messages").orderBy("createdAt").limit(100);

    const unsubscribe = query.onSnapshot((querySnapshot) => {
      //Obtiene todos los mensajes desde la bd con su ID.
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Actualizo los mensajes obtenidos desde la bd.
      setMessages(data);
    });
    //CleanUp
    return unsubscribe;
  }, []);

  const { uid, displayName, photoURL } = user;
  const [newMessage, setNewMessage] = useState("");
  const handleMessageOnChange = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const messagesRef = db.collection("messages");

  const handleOnSubmit = (e) => {
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
      setNewMessage("");
    }
  };

  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <>
      <div className="messages-container">
        {messages.map((message) => (
          <p key={message.id}>
            <Message {...message} />
          </p>
        ))}
      </div>

      <form className="form" onSubmit={handleOnSubmit}>
        <input
          className="mensaje"
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={handleMessageOnChange}
          placeholder="Escribe tu mensaje aqui..."
          autoComplete="off"
        />

        <button className="btn-emoji"></button>

        <button
          className="boton btn-send"
          type="submit"
          disabled={!newMessage}
          onClick={fixSroll()}
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </>
  );
};

export default Channel;
