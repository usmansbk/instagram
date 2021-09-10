import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  return (
    <div className={classes.container}>
      <input className={classes.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
