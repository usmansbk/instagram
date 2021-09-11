import classes from "./index.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <small className={classes.text}>
          © {new Date().getFullYear()} Instagram from Fakebook
        </small>
      </div>
    </footer>
  );
};

export default Footer;
