import classes from "./index.module.css";

const Button = ({ value, disabled }) => {
  return (
    <button className={classes.button} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;
