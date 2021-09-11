import { useState } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

const Input = ({ placeholder, value, onChange, type, right }) => {
  const [focused, setFocused] = useState(false);
  const isFocused = !!value;

  return (
    <div
      className={clsx(
        classes.container,
        (focused || isFocused) && classes.containerFocused
      )}
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
          type={type}
          className={clsx(classes.input, isFocused && classes.inputFocus)}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
        />
      </label>
      <div className={classes.right}>{right}</div>
    </div>
  );
};

export default Input;
