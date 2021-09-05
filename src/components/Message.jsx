import React from 'react';
import { formatRelative } from 'date-fns';
import '../styles/components/Message.css';

const formatDate = (date) => {
  let formattedDate = '';

  if (date) {
    formattedDate = formatRelative(date, new Date());
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
};

const Message = ({ createdAt = null, text = '', displayName = '', photoURL = '' }) => {
  if (!text) return null;

  return (
    <div className='user bg-light-blue'>
      {photoURL ? <img className='photo-user' src={photoURL} alt='Avatar' title='{text}' /> : null}
      <div className='content-user'>
        {displayName ? <span className='name-user color-dark-blue bold'>{displayName}</span> : null}
        {createdAt ? (
          <span className='date-user color-dark-blue bold'>{formatDate(new Date(createdAt.seconds * 1000))}</span>
        ) : null}
        <p className='mensaje-user color-light'>{text}</p>
      </div>
    </div>
  );
};

export default Message;
