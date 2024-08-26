import { useActions } from '../../hooks/useActions';
import classes from './ChartSelectionForm.module.scss';
import bar from '../../assets/images/bar.png';
import line from '../../assets/images/line.png';
import radar from '../../assets/images/radar.png';
import pie from '../../assets/images/pie.png';
import doughnut from '../../assets/images/doughnut.png';
import horizontalBar from '../../assets/images/horizontalBar.png';

const ChartSelectionForm = () => {
  const {setTypeChart, setExamplesType} = useActions();

  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('bar');
            setExamplesType('bar');
          }}
        >
          <img src={bar} alt="Колонны" />
          <p className={classes.typeName}>Колонны</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('horizontalBar');
            setExamplesType('horizontalBar');
          }}
        >
          <img src={horizontalBar} alt="Полосы" />
          <p className={classes.typeName}>Полосы</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('line');
            setExamplesType('line');
          }}
        >
          <img src={line} alt="Линии" />
          <p className={classes.typeName}>Линии</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('radar');
            setExamplesType('radar');
          }}
        >
          <img src={radar} alt="Радар" />
          <p className={classes.typeName}>Радар</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('pie');
            setExamplesType('pie');
          }}
        >
          <img src={pie} alt="Пирог" />
          <p className={classes.typeName}>Пирог</p>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => {
            setTypeChart('doughnut');
            setExamplesType('doughnut');
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
