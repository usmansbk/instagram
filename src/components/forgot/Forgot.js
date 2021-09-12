import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Forgot.module.css";
import Footer from "../common/footer";

const Forgot = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <div className={classes.box}>
              <h4 className={classes.title}>Trouble with logging in?</h4>
              <p className={classes.instruction}>
                Enter your email address, phone number or username, and we'll
                send you a link to get back into your account.
              </p>
            </div>
            <form className={classes.form} onSubmit={onSubmit}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Controller
                    name="userid"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Email address, phone number or username"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className={classes.button}>
                  <Button value="Send Login Link" type="submit" />
                </div>
                <Or />
                <div className={classes.box}>
                  <Link to="/signup" className={classes.link}>
                    Create New Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottomLink}>
              <Link to="/login" className={classes.link}>
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forgot;
