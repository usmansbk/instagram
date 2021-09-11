import { Link } from "react-router-dom";
import classes from "./index.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <Link to="/" className={classes.link}>
            <div className={classes.navBrand}>
              <img src={logo} alt="" className={classes.logo} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
