import { Profile } from "../../../common/icon";
import classes from "./index.module.css";

const Menu = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div className={classes.body}>{children}</div>
      </div>
    </div>
  );
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

export default Menu;
