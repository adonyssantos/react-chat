import '../styles/Button.css';

const Button = ({ onClick = null, children = null }) => (
  <button onClick={onClick}> {children} </button>
);

export default Button;
