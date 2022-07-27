import classes from "./ChartResultExamples.module.scss";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { useActions } from "../../Hooks/useActions";

import React, { useEffect } from "react";
import { exampleValueFirst } from "../../initialValue/exampleValueFirst";
import { Link } from "react-router-dom";
import { exampleValueSecond } from "../../initialValue/exampleValueSecond";

const ChartResultExamples = () => {
  const { getNewOptions, getExampleAddressURL } = useActions();

  useEffect(() => {
    // getNewOptions(exampleValueFirst);
    getExampleAddressURL([exampleFirst, exampleSecond]);
  }, []);

  const { address } = useTypedSelector((state) => state.address);

  const { exampleFirst } = useTypedSelector(
    (state) => state.examples.exampleFirst
  );
  const { exampleSecond } = useTypedSelector(
    (state) => state.examples.exampleSecond
  );

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={exampleFirst.imageURL} alt="Chart example" />
      </div>
      <Link
        className={classes.link}
        to="create"
        onClick={() => getNewOptions(exampleValueFirst)}
      >
        Отредактировать график:{" "}
        <span>{exampleValueFirst.data.datasets[0].label}</span>
      </Link>
      <div className={classes.imageContainer}>
        <img src={exampleSecond.imageURL} alt="Chart example" />
      </div>
      <Link
        className={classes.link}
        to="create"
        onClick={() => getNewOptions(exampleValueSecond)}
      >
        Отредактировать график:{" "}
        <span>{exampleValueSecond.data.datasets[0].label}</span>
      </Link>
    </div>
  );
};

export default ChartResultExamples;
