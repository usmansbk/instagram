import Menu from "../menu";
import classes from "./index.module.css";

const SearchResult = () => {
  return (
    <Menu className={classes.modal} notchClass={classes.notch}>
      <div className={classes.container}>
        <header className={classes.header}>
          <h4 className={classes.title}>Recent</h4>
        </header>
        <div className={classes.body}>
          <p className={classes.text}>No recent searches.</p>
        </div>
      </div>
    </Menu>
  );
};

export default SearchResult;
