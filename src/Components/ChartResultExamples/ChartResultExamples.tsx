import classes from "./ChartResultExamples.module.scss";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { useActions } from "../../Hooks/useActions";
import React from "react";
import { Link } from "react-router-dom";

const ChartResultExamples = () => {
  const { getNewOptions } = useActions();

  const { exampleFirst, exampleSecond, exampleThird } = useTypedSelector(
    (state) => state.examples
  );

  console.log(exampleFirst.exampleFirst.imageURL);

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={exampleFirst.exampleFirst.imageURL} alt="Chart example" />
      </div>
      <Link
        className={classes.link}
        to="create"
        onClick={() => getNewOptions(exampleFirst.exampleFirst)}
      >
        Отредактировать график:{" "}
        <span>
          {exampleFirst.exampleFirst.options.title.text.split(",").shift()}
        </span>
      </Link>
      <div className={classes.imageContainer}>
        <img src={exampleSecond.exampleSecond.imageURL} alt="Chart example" />
      </div>
      <Link
        className={classes.link}
        to="create"
        onClick={() => getNewOptions(exampleThird.exampleThird)}
      >
        Отредактировать график:{" "}
        <span>
          {exampleSecond.exampleSecond.options.title.text.split(",").shift()}
        </span>
      </Link>
      <div className={classes.imageContainer}>
        <img src={exampleThird.exampleThird.imageURL} alt="Chart example" />
      </div>
      <Link
        className={classes.link}
        to="create"
        onClick={() => getNewOptions(exampleThird.exampleThird)}
      >
        Отредактировать график:{" "}
        <span>
          {exampleThird.exampleThird.options.title.text.split(",").shift()}
        </span>
      </Link>
    </div>
  );
};

export default ChartResultExamples;
