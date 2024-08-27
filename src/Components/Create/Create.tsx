import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { mainOptionsSelector } from '../../redux/selectors/selectors';
import classes from './Create.module.scss';
import ChartSelectionForm from '../ChartSelectionForm/ChartSelectionForm';
import ChartResult from '../ChartResult/ChartResult';
import ChartSettings from '../ChartSettings/ChartSettings';
import ChartViewAndSave from '../ChartViewAndSave/ChartViewAndSave';

const Create = () => {
  const {mainOptions, width, height} = useTypedSelector(mainOptionsSelector);
  const {getAddress} = useActions();

  useEffect(() => {
    getAddress(mainOptions, width, height);
  }, [mainOptions, width, height]);

  return (
    <main className={classes.create}>
      <h2 className={classes.title}>Создать график онлайн</h2>
      <p className={classes.textContent}>
        На этой странице расположен конструктор для построения графиков онлайн.
        Создать их очень просто: выберите необходимый вам вид графика
        (столбчатый, линейный, круговой…), заполните таблицу данных, и график
        готов! При необходимости, настройте график, установите необходимую
        ширину, высоту и сохраните его.
      </p>
      <div className={classes.createContent}>
        <ChartSelectionForm />
        <ChartResult />
        <div className={classes.optionsChartContainer}>
          <h3 className={classes.miniTitle}>Настройки графика</h3>
          <div className={classes.optionsChartInner}>
            <ChartSettings />
            <ChartViewAndSave />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create;
