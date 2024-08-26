import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import classes from './Examples.module.scss';
import ChartSelectionForm from '../ChartSelectionForm/ChartSelectionForm';
import ChartResultExamples from '../ChartResultExamples/ChartResultExamples';

const Examples = () => {
  const examplesOptions = useTypedSelector((state) => state.examplesOptions);
  const {exampleFirst, exampleSecond, exampleThird} = useTypedSelector((state) => state.examplesOptions);
  const {getAddress} = useActions();

  useEffect(() => {
    getAddress(exampleFirst, 800, 400, 'firstExample');
    getAddress(exampleSecond, 800, 400, 'secondExample');
    getAddress(exampleThird, 800, 400, 'thirdExample');
  }, [examplesOptions]);

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
