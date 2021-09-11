import { useState } from "react";
import { Link } from "react-router-dom";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Login.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setPasswordVisibility] = useState(false);
  const error = false;
  const togglePassword = () => setPasswordVisibility((mode) => !mode);
  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Input
                    placeholder="Phone number, username or email address"
                    value={username}
                    onChange={onUsernameChange}
                  />
                  <Input
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    type={showPassword ? "text" : "password"}
                    right={
                      !!password && (
                        <div className={classes.passwordVisibility}>
                          <button
                            type="button"
                            onClick={togglePassword}
                            className={classes.visibilityButton}
                          >
                            Show
                          </button>
                        </div>
                      )
                    }
                  />
                </div>
                <div className={classes.box}>
                  <Button value="Log In" disabled={!(username && password)} />
                </div>
                <Or />
                <div className={classes.box}>
                  <FacebookTextButton />
                </div>
              </div>
            </form>
            <div className={classes.box}>
              {error && (
                <p className={classes.error}>
                  Sorry, your password was incorrect. Please double-check your
                  password.
                </p>
              )}
            </div>
            <Link to="/forgot" className={classes.link}>
              Forgotten your password?
            </Link>
          </div>
        </div>
        <div className={classes.signup}>
          <div className={classes.signupContent}>
            <p className={classes.signupText}>
              Don't have an account?{" "}
              <Link className={classes.signupLink} to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
