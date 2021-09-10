import classes from "./index.module.css";
import logo from "./facebook.svg";

const FacebookTextButton = () => {
  return (
    <button className={classes.button}>
      <img src={logo} alt="" className={classes.logo} />
      <span className={classes.label}>Log in with Facebook</span>
    </button>
  );
};

export default FacebookTextButton;
