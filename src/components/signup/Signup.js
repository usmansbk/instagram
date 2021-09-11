import { useState } from "react";
import { Link } from "react-router-dom";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Signup.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setPasswordVisibility] = useState(false);
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
              <h1 className={classes.title}>
                Sign up to see photos and videos from your friends.
              </h1>
              <div className={classes.formContent}>
                <div className={classes.oauth}>
                  <FacebookTextButton />
                </div>
                <Or />
                <div className={classes.inputs}>
                  <Input placeholder="Mobile number or email address" />
                  <Input placeholder="Full Name" />
                  <Input
                    placeholder="Username"
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
              </div>
              <div className={classes.button}>
                <Button value="Sign Up" disabled={!(username && password)} />
              </div>
            </form>
            <p href="/forgot" className={classes.link}>
              By signing up, you agree to our <a href="#terms">Terms</a>,{" "}
              <a href="#data">Data Policy</a> and{" "}
              <a href="#cookies">Cookie Policy</a>.
            </p>
          </div>
        </div>
        <div className={classes.signup}>
          <div className={classes.signupContent}>
            <p className={classes.signupText}>
              Have an account?{" "}
              <Link className={classes.signupLink} to="/">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
