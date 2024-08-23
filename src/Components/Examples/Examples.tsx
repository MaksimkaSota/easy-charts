import React, { useEffect } from "react";
import classes from "./Examples.module.scss";
import ChartSelectionForm from "../ChartSelectionForm/ChartSelectionForm";
import ChartResultExamples from "../ChartResultExamples/ChartResultExamples";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const Examples = () => {
  const { getExampleAddressURL } = useActions();

  const { exampleFirst, exampleSecond, exampleThird } = useTypedSelector(
    (state) => state.examples
  );

  const { options } = useTypedSelector((state) => state.options);

  useEffect(() => {
    getExampleAddressURL([
      exampleFirst.exampleFirst,
      exampleSecond.exampleSecond,
      exampleThird.exampleThird,
    ]);
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
        <ChartResultExamples />
      </div>
    </div>
  );
};

export default Examples;
