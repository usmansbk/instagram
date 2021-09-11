import { useState } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

const Input = ({
  placeholder,
  value = "",
  onChange,
  type = "text",
  rightButtonLabel,
  onClickRightButton,
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = !!value;

  return (
    <div
      className={clsx(classes.container, focused && classes.containerFocused)}
    >
      <label className={classes.label}>
        <span
          className={clsx(
            classes.placeholder,
            hasValue && classes.animatePlaceholder
          )}
        >
          {placeholder}
        </span>
        <input
          type={type}
          className={clsx(classes.input, hasValue && classes.inputFocus)}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
        />
      </label>
      <div className={classes.right}>
        {rightButtonLabel && (
          <div className={classes.textButtonWrapper}>
            <button
              type="button"
              onClick={onClickRightButton}
              className={classes.textButton}
            >
              {rightButtonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
