import React from "react";
import classes from "./Gallery.module.scss";
import bar from "../../assets/images/bar.png";
import line from "../../assets/images/line.png";
import radar from "../../assets/images/radar.png";
import pie from "../../assets/images/pie.png";
import doughnut from "../../assets/images/doughnut.png";
import horizontalBar from "../../assets/images/horizontalBar.png";
import { Link } from "react-router-dom";
import { useActions } from "../../Hooks/useActions";

const Gallery = () => {
  const { setTypeChart } = useActions();

  return (
    <div className={classes.gallery}>
      <h2 className={classes.title}>Галерея графиков</h2>
      <p className={classes.textContent}>
        Выберите необходимый вид графика, далее вы перейдёте в режим
        онлайн-конструктора, в котором сможете заполнить данные графика, и затем
        скачать. Какую график вам необходимо построить? Столбчатый, линейный,
        круговой…?
      </p>
      <div className={classes.typeChartsContainer}>
        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("bar")}
        >
          <img src={bar} alt="" />
          <p className={classes.typeName}>Колонны</p>
        </Link>

        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("horizontalBar")}
        >
          <img src={horizontalBar} alt="" />
          <p className={classes.typeName}>Полосы</p>
        </Link>

        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("line")}
        >
          <img src={line} alt="" />
          <p className={classes.typeName}>Линии</p>
        </Link>

        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("radar")}
        >
          <img src={radar} alt="" />
          <p className={classes.typeName}>Радар</p>
        </Link>

        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("pie")}
        >
          <img src={pie} alt="" />
          <p className={classes.typeName}>Пирог</p>
        </Link>

        <Link
          to="create"
          className={classes.imageContainer}
          onClick={() => setTypeChart("doughnut")}
        >
          <img src={doughnut} alt="" />
          <p className={classes.typeName}>Пончик</p>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
