import classes from "./index.module.css";

const Button = ({ value, disabled, type = "button" }) => {
  return (
    <button className={classes.button} disabled={disabled} type={type}>
      {value}
    </button>
  );
};

export default Button;
