import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Login.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setPasswordVisibility] = useState(false);

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
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    right={
                      !!password && (
                        <div className={classes.passwordVisibility}>
                          <button
                            type="button"
                            onClick={() =>
                              setPasswordVisibility((mode) => !mode)
                            }
                            className={classes.visibilityButton}
                          >
                            Show
                          </button>
                        </div>
                      )
                    }
                  />
                </div>
                <div className={classes.button}>
                  <Button value="Log In" disabled={!(username && password)} />
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
      <Footer />
    </div>
  );
};

export default Login;
