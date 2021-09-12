import classes from "./Account.module.css";

const AccountIcon = () => {
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <div className={classes.frame}>
        <img
          src={"https://i.pravatar.cc/300"}
          alt=""
          className={classes.image}
        />
      </div>
    </div>
  );
};

export default AccountIcon;
