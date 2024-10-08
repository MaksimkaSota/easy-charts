import { type ReactElement, memo } from 'react';
import cn from 'classnames';
import classes from './ChartSelectionMenu.module.scss';
import bar from '../../../assets/images/bar.png';
import line from '../../../assets/images/line.png';
import radar from '../../../assets/images/radar.png';
import pie from '../../../assets/images/pie.png';
import doughnut from '../../../assets/images/doughnut.png';
import horizontalBar from '../../../assets/images/horizontalBar.png';
import { ChartSelectionButton } from '../ChartSelectionButton/ChartSelectionButton';
import { ChartType } from '../../../utils/types/enums';

type PropsType = {
  type: string;
};

export const ChartSelectionMenu = memo<PropsType>(({ type }): ReactElement => {
  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={classes.chartsTypeContainer}>
        <ChartSelectionButton
          isDisabled={type === ChartType.bar}
          type={ChartType.bar}
          src={bar}
          text="Колонны"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.bar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.hBar}
          type={ChartType.hBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.hBar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.line}
          type={ChartType.line}
          src={line}
          text="Линии"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.line })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.radar}
          type={ChartType.radar}
          src={radar}
          text="Радар"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.radar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.pie}
          type={ChartType.pie}
          src={pie}
          text="Пирог"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.pie })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.doughnut}
          type={ChartType.doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.doughnut })}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
});
