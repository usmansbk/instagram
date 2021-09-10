import { useState } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const isFocused = !!value;

  return (
    <div
      className={clsx(classes.container, isFocused && classes.containerFocused)}
    >
      <label className={classes.label}>
        <span
          className={clsx(
            classes.placeholder,
            isFocused && classes.animatePlaceholder
          )}
        >
          {placeholder}
        </span>
        <input
          className={clsx(classes.input, isFocused && classes.inputFocus)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <div className={classes.right} />
    </div>
  );
};

export default Input;
