import { useState } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

const Input = ({ placeholder }) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <div
      className={clsx(classes.container, focused && classes.containerFocused)}
    >
      <label className={classes.label}>
        <span
          className={clsx(
            classes.placeholder,
            focused && classes.animatePlaceholder
          )}
        >
          {placeholder}
        </span>
        <input className={classes.input} onFocus={onFocus} onBlur={onBlur} />
      </label>
    </div>
  );
};

export default Input;
