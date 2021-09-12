import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Signup.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";

const Signup = () => {
  const history = useHistory();
  const { control, handleSubmit, watch } = useForm();
  const [showPassword, setPasswordVisibility] = useState(false);
  const togglePassword = () => setPasswordVisibility((mode) => !mode);
  const onSubmit = handleSubmit(() => history.push("/i"));
  const password = watch("password");
  const error = false;

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form} onSubmit={onSubmit}>
              <h1 className={classes.title}>
                Sign up to see photos and videos from your friends.
              </h1>
              <div className={classes.formContent}>
                <div className={classes.box}>
                  <FacebookTextButton />
                </div>
                <Or />
                <div className={classes.inputs}>
                  <Controller
                    name="userid"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Mobile number or email address"
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="fullname"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input placeholder="Full Name" {...field} />
                    )}
                  />
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input placeholder="Username" {...field} />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Password"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        onClickRightButton={togglePassword}
                        rightButtonLabel={
                          !!password && (showPassword ? "Hide" : "Show")
                        }
                      />
                    )}
                  />
                </div>
              </div>
              <div className={classes.box}>
                <Button value="Sign Up" type="submit" />
              </div>
            </form>
            {error && (
              <div className={classes.box}>
                <p className={classes.error}>
                  This username isn't available. Please try another.
                </p>
              </div>
            )}
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
              <Link className={classes.signupLink} to="/login">
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
