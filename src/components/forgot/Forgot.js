import { useState } from "react";
import { Link } from "react-router-dom";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Forgot.module.css";
import Footer from "../common/footer";

const Forgot = () => {
  const [username, setUsername] = useState("");
  const onUsernameChange = (e) => setUsername(e.target.value);

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
            <form className={classes.form}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Input
                    placeholder="Email address, phone number or username"
                    value={username}
                    onChange={onUsernameChange}
                  />
                </div>
                <div className={classes.button}>
                  <Button value="Send Login Link" disabled={!username} />
                </div>
                <Or />
                <div className={classes.box}>
                  <Link to="/" className={classes.newAccount}>
                    Create New Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forgot;
