import classes from './ChartSelectionForm.module.scss';
import bar from '../../assets/images/bar.png';
import line from '../../assets/images/line.png';
import radar from '../../assets/images/radar.png';
import pie from '../../assets/images/pie.png';
import doughnut from '../../assets/images/doughnut.png';
import horizontalBar from '../../assets/images/horizontalBar.png';
import { TypeSelection } from '../Common/TypeSelection/TypeSelection';

const ChartSelectionForm = () => {
  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <TypeSelection
          isLink={false}
          type="bar"
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink={false}
          type="horizontalBar"
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink={false}
          type="line"
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink={false}
          type="radar"
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink={false}
          type="pie"
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink={false}
          type="doughnut"
          src={doughnut}
          text="Пончик"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
};

export default ChartSelectionForm;
