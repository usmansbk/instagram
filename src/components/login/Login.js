import logo from "../../assets/logo-text.png";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={logo} alt="" className={classes.logo} />
        <div className={classes.body}>
          <form className={classes.form}></form>
        </div>
      </div>
    </div>
  );
};

export default Login;
