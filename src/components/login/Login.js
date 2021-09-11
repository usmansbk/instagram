import { useState } from "react";
import { Link } from "react-router-dom";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Login.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit, control, watch } = useForm();
  const [showPassword, setPasswordVisibility] = useState(false);
  const togglePassword = () => setPasswordVisibility((mode) => !mode);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const error = false;

  const password = watch("password");

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form} onSubmit={onSubmit}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Phone number, username or email address"
                        {...field}
                        valid
                        error
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true, minLength: 8 }}
                    render={({ field }) => (
                      <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onClickRightButton={togglePassword}
                        rightButtonLabel={
                          !!password && (showPassword ? "Hide" : "Show")
                        }
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className={classes.box}>
                  <Button value="Log In" type="submit" />
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
