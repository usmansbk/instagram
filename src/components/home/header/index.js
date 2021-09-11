import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../common/icon";
import classes from "./index.module.css";
import logo from "./logo.png";

const Logo = () => (
  <div className={classes.left}>
    <Link to="/" className={classes.link}>
      <div className={classes.navBrand}>
        <img src={logo} alt="" className={classes.logo} />
      </div>
    </Link>
  </div>
);

const SearchInput = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div className={classes.center}>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={classes.searchInput}
        placeholder="Search"
      />
      {!focused && (
        <div className={classes.searchButton}>
          <div className={classes.searchPlaceholder}>
            <Icon name="searchIcon" />
            <span className={classes.searchPlaceholderText}>Search</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
