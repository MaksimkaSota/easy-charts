import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./Footer.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.center}>
        <Logo />
      </div>
      <p className={classes.text}>Создать график онлайн, 2022</p>
      <div className={classes.center}>
        <Navigation />
      </div>
    </div>
  );
};

export default Footer;
