import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Login.module.css";
import FacebookTextButton from "../common/button/facebook";

const Login = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Input placeholder="Phone number, username or email address" />
                  <Input placeholder="Password" />
                </div>
                <div className={classes.button}>
                  <Button value="Log In" disabled />
                </div>
                <Or />
                <div className={classes.oauth}>
                  <FacebookTextButton />
                </div>
              </div>
            </form>
            <a href="/forgot" className={classes.link}>
              Forgotten your password?
            </a>
          </div>
        </div>
        <div className={classes.signup}>
          <div className={classes.signupContent}>
            <p className={classes.signupText}>
              Don't have an account?{" "}
              <a className={classes.signupLink} href="/signup">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
