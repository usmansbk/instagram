import { useState } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
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
          className={clsx(classes.input, isFocused && classes.inputFocus)}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
        />
      </label>
      <div className={classes.right} />
    </div>
  );
};

export default Input;
