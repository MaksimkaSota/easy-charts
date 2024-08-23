import React from "react";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { initialValue } from "../../initialValue/initialValue";
import { useActions } from "../../hooks/useActions";

const Navigation = () => {
  const { getNewOptions } = useActions();
  return (
    <nav className={classes.navigation}>
      <Link
        to="create"
        className={classes.link}
        onClick={() => getNewOptions(initialValue)}
      >
        Создать
      </Link>
      <Link
        to="gallery"
        className={classes.link}
        onClick={() => getNewOptions(initialValue)}
      >
        Галерея
      </Link>
      <Link to="examples" className={classes.link}>
        Примеры
      </Link>
      <Link to="contacts" className={classes.link}>
        Контакты
      </Link>
    </nav>
  );
};

export default Navigation;
