import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { db, firebase } from '../config/firebase';
import Message from './Message';
import { fixScroll } from './helpers';
import '../styles/components/Channel.css';

const Channel = ({ user = null }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const query = db.collection('messages').orderBy('createdAt').limit(100);

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
  const [newMessage, setNewMessage] = useState('');
  const handleMessageOnChange = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const messagesRef = db.collection('messages');

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
      setNewMessage('');
    }
  };

  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div>
      <div className='fake-header'></div>
      <div className='messages-container' onLoad={fixScroll}>
        {messages.map((message) => (
          <span key={message.id}>
            <Message {...message} />
          </span>
        ))}
      </div>

      <div className='fake-typing-box'></div>

      <form className='nav bg-dark-blue form typing-box' onSubmit={handleOnSubmit}>
        <input
          className='mensaje bg-light-blue color-light'
          ref={inputRef}
          type='text'
          value={newMessage}
          onChange={handleMessageOnChange}
          placeholder='Escribe tu mensaje aquí...'
          autoComplete='off'
        />

        <button
          className='send-btn btn-send bg-dark-blue color-light'
          type='button'
          disabled={!newMessage}
          onClick={fixScroll}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Channel;
