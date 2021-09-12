import { useState } from "react";
import { Link } from "react-router-dom";
import Icon, {
  HomeSolid,
  HomeOutline,
  MessengerSolid,
  MessengerOutline,
  HeartSolid,
  HeartOutline,
  ExploreSolid,
  ExploreOutline,
} from "../../common/icon";
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
          <Link to="/i/direct" onClick={() => setActiveIndex(1)}>
            <NavIcon
              isActive={activeIndex === 1}
              activeComponent={<MessengerSolid />}
              inActiveComponent={<MessengerOutline />}
            />
          </Link>
        </li>
        <li>
          <Link to="/i/explore" onClick={() => setActiveIndex(2)}>
            <NavIcon
              isActive={activeIndex === 2}
              activeComponent={<ExploreSolid />}
              inActiveComponent={<ExploreOutline />}
            />
          </Link>
        </li>
        <li>
          <div className={classes.navButton} onClick={() => setActiveIndex(3)}>
            <NavIcon
              isActive={activeIndex === 3}
              activeComponent={<HeartSolid />}
              inActiveComponent={<HeartOutline />}
            />
          </div>
        </li>
        <li>
          <Link
            to="/login"
            className={classes.navButton}
            onClick={() => setActiveIndex(4)}
          >
            <AccountIcon isActive={activeIndex === 4} />
          </Link>
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
