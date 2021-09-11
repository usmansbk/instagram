import clsx from "clsx";
import classes from "./index.module.css";
import "./icons.css";

const Icon = ({ name, className }) => (
  <span className={clsx(classes.asset, name, className)} />
);

export default Icon;
