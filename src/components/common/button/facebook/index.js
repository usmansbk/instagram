import Icon from "../../icon";
import classes from "./index.module.css";

const FacebookTextButton = () => {
  return (
    <button className={classes.button}>
      <Icon name="facebookIcon" className={classes.logo} />
      <span className={classes.label}>Log in with Facebook</span>
    </button>
  );
};

export default FacebookTextButton;
