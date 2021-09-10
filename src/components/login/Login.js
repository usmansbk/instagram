import TextLogo from "../common/logo";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TextLogo />
        <div className={classes.body}>
          <form className={classes.form}>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
