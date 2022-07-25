import React, { useEffect } from "react";
import classes from "./Examples.module.scss";
import ChartSelectionForm from "../ChartSelectionForm/ChartSelectionForm";
import ChartResultExamplesFirst from "../ChartResultExamples/ChartResultExamplesFirst";

import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypeSelector";

const Examples = () => {
  const {
    getAddressURL,
    setInitialValueByData,
    setInitialValueByLabels,
    addRow,
    addColumn,
    setLabelInData,
    removeRow,
    removeColumn,
  } = useActions();

  const { options } = useTypedSelector((state) => state.options);

  const exampleFirst = useTypedSelector((state) => state.examples.exampleFirst);
  const exampleSecond = useTypedSelector(
    (state) => state.examples.exampleSecond
  );

  useEffect(() => {
    getAddressURL(options);
  }, [options]);

  return (
    <div className={classes.examples}>
      <h2 className={classes.title}>Примеры графиков</h2>
      <p className={classes.textContent}>
        На данной странице вы можете найти подходящие вам примеры графиков,
        чтобы использовать их для построения своего графика, а также для того,
        чтобы понять как работает конструктор графиков на нашем сайте. Также вы
        можете выбрать необходимый вид графика, чтобы посмотреть примеры для
        данного вида: столбчатый, линейный, круговой…!
      </p>
      <div className={classes.examplesMain}>
        <ChartSelectionForm />
        <ChartResultExamplesFirst />
      </div>
    </div>
  );
};

export default Examples;