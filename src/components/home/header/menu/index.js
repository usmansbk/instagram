import classes from "./index.module.css";

const Menu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content}></div>
    </div>
  );
};

export default Menu;
