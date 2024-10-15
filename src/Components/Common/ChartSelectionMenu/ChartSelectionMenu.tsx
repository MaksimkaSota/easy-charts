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
  className: string;
};

export const ChartSelectionMenu = memo<PropsType>(({ type, className }): ReactElement => {
  return (
    <div className={classes.chartSelectionForm}>
      <h3 className={classes.miniTitle}>Вид</h3>
      <div className={cn(classes.chartsTypeContainer, className)}>
        <ChartSelectionButton
          isDisabled={type === ChartType.Bar}
          type={ChartType.Bar}
          src={bar}
          text="Колонны"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Bar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.HBar}
          type={ChartType.HBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.HBar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Line}
          type={ChartType.Line}
          src={line}
          text="Линии"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Line })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Radar}
          type={ChartType.Radar}
          src={radar}
          text="Радар"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Radar })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Pie}
          type={ChartType.Pie}
          src={pie}
          text="Пирог"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Pie })}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Doughnut}
          type={ChartType.Doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Doughnut })}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
});
