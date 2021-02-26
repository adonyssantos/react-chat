import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const Channel = ({ user = null }) => {
  console.log(user);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const query = db.collection("messages").orderBy("createdAt").limit(100);

    const unsubscribe = query.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMessages(data);
    });

    return unsubscribe;
  }, []);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};

export default Channel;
