import React from "react";
import classes from "./ChartSelectionForm.module.scss";
import bar from "../../assets/images/bar.png";
import line from "../../assets/images/line.png";
import radar from "../../assets/images/radar.png";
import pie from "../../assets/images/pie.png";
import doughnut from "../../assets/images/doughnut.png";
import horizontalBar from "../../assets/images/horizontalBar.png";
import { useActions } from "../../hooks/useActions";

const ChartSelectionForm = () => {
  const { setTypeChart, setTypeChartInExamples } = useActions();

  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("bar");
            setTypeChartInExamples("bar");
          }}
        >
          <img src={bar} alt="Колонны" />
          <p className={classes.typeName}>Колонны</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("horizontalBar");
            setTypeChartInExamples("horizontalBar");
          }}
        >
          <img src={horizontalBar} alt="Полосы" />
          <p className={classes.typeName}>Полосы</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("line");
            setTypeChartInExamples("line");
          }}
        >
          <img src={line} alt="Линии" />
          <p className={classes.typeName}>Линии</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("radar");
            setTypeChartInExamples("radar");
          }}
        >
          <img src={radar} alt="Радар" />
          <p className={classes.typeName}>Радар</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("pie");
            setTypeChartInExamples("pie");
          }}
        >
          <img src={pie} alt="Пирог" />
          <p className={classes.typeName}>Пирог</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart("doughnut");
            setTypeChartInExamples("doughnut");
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
