import Menu from "../menu";
import classes from "./index.module.css";

const SearchResult = () => {
  return (
    <Menu className={classes.modal} notchClass={classes.notch}>
      <div className={classes.container}></div>
    </Menu>
  );
};

export default SearchResult;
