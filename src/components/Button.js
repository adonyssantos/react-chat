import '../styles/Button.css';

const Button = ({ onClick = null, children = null }) => (
  <button onClick={onClick} className="btn-salir"> {children} </button>
);

export default Button;
