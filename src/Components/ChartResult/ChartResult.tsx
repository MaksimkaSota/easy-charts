import React from "react";
import classes from "./ChartResult.module.scss";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const ChartResult = () => {
  const { address } = useTypedSelector((state) => state.address);

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={address} alt="Charts" />
      </div>
    </div>
  );
};

export default ChartResult;
