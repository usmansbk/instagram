import { forwardRef, useCallback, useState } from "react";
import clsx from "clsx";
import Icon from "../icon";
import classes from "./index.module.css";

const Input = (props, ref) => {
  const {
    placeholder,
    value = "",
    onChange,
    onBlur,
    type = "text",
    rightButtonLabel,
    onClickRightButton,
    valid,
    error,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const hasValue = !!value;

  const _onFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const _onBlur = useCallback(
    (e) => {
      setFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

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
          ref={ref}
          type={type}
          className={clsx(classes.input, hasValue && classes.inputFocus)}
          onChange={onChange}
          onFocus={_onFocus}
          onBlur={_onBlur}
          value={value}
          {...rest}
        />
      </label>
      <div className={classes.right}>
        {error && <Icon name="inputError" className={classes.icon} />}
        {valid && <Icon name="inputAccepted" className={classes.icon} />}
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

export default forwardRef(Input);
