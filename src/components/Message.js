import { formatRelative } from "date-fns";
// import "../styles/Message.css";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    formattedDate = formatRelative(date, new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  if (!text) return null;
  return (
    <div className="user">
      {photoURL ? (
        <img
          className="photo-user"
          src={photoURL}
          alt="Avatar"
          title="{text}"
        />
      ) : null}

      <div className="content-user">
        {displayName ? <span className="name-user">{displayName}</span> : null}
        {createdAt?.seconds ? (
          <span className="date-user">
            {formatDate(new Date(createdAt.seconds * 1000))}
          </span>
        ) : null}
        <p className="mensaje-user">{text}</p>
      </div>
    </div>
  );
};

export default Message;
