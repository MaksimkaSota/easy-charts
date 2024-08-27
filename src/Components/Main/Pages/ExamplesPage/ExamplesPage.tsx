import { FC, ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypeSelector';
import { useActions } from '../../../../hooks/useActions';
import { examplesOptionsSelector } from '../../../../redux/selectors/selectors';
import classes from './ExamplesPage.module.scss';
import { ChartSelectionMenu } from '../../../Common/ChartSelectionMenu/ChartSelectionMenu';
import { ExampleCharts } from './ExampleCharts/ExampleCharts';

export const ExamplesPage: FC = (): ReactElement => {
  const examplesOptions = useTypedSelector(examplesOptionsSelector);
  const {exampleFirst, exampleSecond, exampleThird} = useTypedSelector(examplesOptionsSelector);
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
        <ChartSelectionMenu />
        <ExampleCharts />
      </div>
    </div>
  );
};
