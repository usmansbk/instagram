import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
