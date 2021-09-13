import clsx from "clsx";
import { Profile } from "../../../common/icon";
import classes from "./index.module.css";

const Menu = ({ children, className, onDismiss }) => {
  return (
    <div className={clsx(classes.container, className)}>
      <div className={classes.overlay} onClick={onDismiss} />
      <div className={classes.content}>
        <div className={classes.body}>{children}</div>
      </div>
    </div>
  );
};

export const MenuDivider = () => {
  return <hr className={classes.divider} />;
};

export const MenuItem = ({ text }) => {
  return (
    <div className={classes.menuItem}>
      <div>
        <Profile />
      </div>
      <div className={classes.textWrapper}>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export const MenuFooter = ({ children }) => {
  return <div className={classes.footer}>{children}</div>;
};

export default Menu;
