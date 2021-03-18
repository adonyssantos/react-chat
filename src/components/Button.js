import "../styles/Button.css";

const Button = ({ onClick = null, children = null }) => (
  <button className="boton" onClick={onClick}>
    {" "}
    {children}{" "}
  </button>
);

export default Button;
