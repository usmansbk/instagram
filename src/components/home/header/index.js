import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon, { HomeSolid, HomeOutline } from "../../common/icon";
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
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const cancelSearch = () => {
    setFocused(false);
    setValue("");
  };
  const _onFocus = () => setFocused(true);
  const _onBlur = () => setFocused(false);

  return (
    <div className={classes.center}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={_onFocus}
        onBlur={_onBlur}
        className={classes.searchInput}
        placeholder="Search"
      />
      {focused && (
        <button onMouseDown={cancelSearch} className={classes.clearButton}>
          <Icon name="clearSearch" />
        </button>
      )}
      {!focused && (
        <div className={classes.searchButton}>
          <div className={classes.searchPlaceholder}>
            <Icon name="searchIcon" />
            <span className={classes.searchPlaceholderText}>
              {value || "Search"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul className={classes.navLinks}>
        <li>
          <IconNavLink
            to="/"
            activeComponent={<HomeSolid />}
            inActiveComponent={<HomeOutline />}
          />
        </li>
      </ul>
    </div>
  );
};

const IconNavLink = ({ to, activeComponent, inActiveComponent }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <NavLink to={to}>{isActive ? activeComponent : inActiveComponent}</NavLink>
  );
};

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <SearchInput />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
