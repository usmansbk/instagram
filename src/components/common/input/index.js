import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  return <input className={classes.input} placeholder={placeholder} />;
};

export default Input;
