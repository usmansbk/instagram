import { useState } from "react";
import { Link } from "react-router-dom";
import Icon, { HomeSolid, HomeOutline, Profile } from "../../common/icon";
import AccountIcon from "./account";
import Menu, { MenuDivider, MenuItem, MenuFooter } from "./menu";
import classes from "./index.module.css";
import logo from "./logo.png";
import SearchResult from "./search";

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
      {focused && <SearchResult />}
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
          <div className={classes.navButton}>
            <div onClick={() => setActiveIndex(4)}>
              <AccountIcon isActive={activeIndex === 4} />
            </div>
            {activeIndex === 4 && (
              <Menu
                className={classes.menu}
                notchClass={classes.notch}
                onDismiss={() => setActiveIndex(0)}
              >
                <Link to="/profile" className={classes.link}>
                  <MenuItem text="Profile" icon={<Profile />} />
                </Link>
                <MenuDivider />
                <MenuFooter>
                  <Link to="/login" className={classes.logoutButton}>
                    Log out
                  </Link>
                </MenuFooter>
              </Menu>
            )}
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
