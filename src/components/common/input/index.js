import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>
        <span className={classes.placeholder}>{placeholder}</span>
        <input className={classes.input} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
