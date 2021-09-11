import clsx from "clsx";
import classes from "./index.module.css";

const Icon = (name) => <div className={clsx(classes.asset, name)} />;

export default Icon;
