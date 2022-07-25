import classes from "./ChartResultExamplesFirst.module.scss";
import { useTypedSelector } from "../../Hooks/useTypeSelector";
import { useActions } from "../../Hooks/useActions";

import React, { useEffect } from "react";
import { exampleValueFirst } from "../../initialValue/exampleValueFirst";
import { Link } from "react-router-dom";

const ChartResultExamplesFirst = () => {
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
    <Link
      to="create"
      onClick={() => getNewOptions(exampleValueFirst)}
      className={classes.chartResult}
    >
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={exampleFirst.imageURL} alt="Charts" />
      </div>
      <div className={classes.imageContainer}>
        <img src={exampleSecond.imageURL} alt="Charts" />
      </div>
    </Link>
  );
};

export default ChartResultExamplesFirst;
