import React from "react";
import classes from "./Info.module.scss";
import { Link } from "react-router-dom";
import info from "../../images/info.png";

const Info = () => {
  return (
    <div className={classes.info}>
      <h2 className={classes.title}>Как создать график онлайн на сайте</h2>
      <p className={classes.textContent}>
        Вы можете посмотреть примеры графиков/диаграмм и создать свой график из
        подходящего вам примера. Ниже описана полная инструкция, как создать
        диаграмму на нашем сайте.
      </p>
      <div className={classes.imageContainer}>
        <img src={info} alt="" />
      </div>
      <div className={classes.itemOne}>
        <h3 className={classes.miniTitle}>
          <span>1.</span> Выберите вид графика
        </h3>
        <p>
          На странице <Link to="create">создания</Link> или в{" "}
          <Link to="gallery">галерее</Link> выберите подходящий вам тип графика.
          Как вам необходимо отобразить ваши данные? Столбчатый, линейный,
          круговой…?
        </p>
      </div>
      <div className={classes.itemTho}></div>
      <div className={classes.itemThree}></div>
    </div>
  );
};

export default Info;
