import { memo } from 'react';
import type { ReactElement } from 'react';
import classes from './ChartSelectionMenu.module.scss';
import bar from '../../../assets/images/bar.png';
import line from '../../../assets/images/line.png';
import radar from '../../../assets/images/radar.png';
import pie from '../../../assets/images/pie.png';
import doughnut from '../../../assets/images/doughnut.png';
import horizontalBar from '../../../assets/images/horizontalBar.png';
import { ChartSelectionButton } from '../ChartSelectionButton/ChartSelectionButton';

export const ChartSelectionMenu = memo((): ReactElement => {
  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <ChartSelectionButton
          isLink={false}
          type="bar"
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink={false}
          type="horizontalBar"
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink={false}
          type="line"
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink={false}
          type="radar"
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink={false}
          type="pie"
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
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
});
