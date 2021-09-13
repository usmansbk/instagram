import { useState } from "react";
import { Link } from "react-router-dom";
import Icon, { HomeSolid, HomeOutline } from "../../common/icon";
import AccountIcon from "./Account";
import classes from "./index.module.css";
import logo from "./logo.png";

const Logo = () => (
  <div className={classes.left}>
    <Link to="/i" className={classes.link}>
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={classes.nav}>
      <ul className={classes.navLinks}>
        <li>
          <Link to="/i" onClick={() => setActiveIndex(0)}>
            <NavIcon
              isActive={activeIndex === 0}
              activeComponent={<HomeSolid />}
              inActiveComponent={<HomeOutline />}
            />
          </Link>
        </li>
        <li>
          <div className={classes.navButton} onClick={() => setActiveIndex(4)}>
            <AccountIcon isActive={activeIndex === 4} />
          </div>
        </li>
      </ul>
    </div>
  );
};

const NavIcon = ({ activeComponent, inActiveComponent, isActive }) => {
  return isActive ? activeComponent : inActiveComponent;
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
