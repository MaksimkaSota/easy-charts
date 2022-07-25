import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
