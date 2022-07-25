import React from "react";
import classes from "./ChartSelectionForm.module.scss";
import bar from "../../images/bar.png";
import line from "../../images/line.png";
import radar from "../../images/radar.png";
import pie from "../../images/pie.png";
import doughnut from "../../images/doughnut.png";
import horizontalBar from "../../images/horizontalBar.png";
import { useActions } from "../../Hooks/useActions";

const ChartSelectionForm = () => {
  const { setTypeChart } = useActions();

  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("bar");
          }}
        >
          <img src={bar} alt="Колонны" />
          <p className={classes.typeName}>Колонны</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("horizontalBar");
          }}
        >
          <img src={horizontalBar} alt="Полосы" />
          <p className={classes.typeName}>Полосы</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("line");
          }}
        >
          <img src={line} alt="Линии" />
          <p className={classes.typeName}>Линии</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("radar");
          }}
        >
          <img src={radar} alt="Радар" />
          <p className={classes.typeName}>Радар</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("pie");
          }}
        >
          <img src={pie} alt="Пирог" />
          <p className={classes.typeName}>Пирог</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("doughnut");
          }}
        >
          <img src={doughnut} alt="Пончик" />
          <p className={classes.typeName}>Пончик</p>
        </div>
      </div>
    </div>
  );
};

export default ChartSelectionForm;
