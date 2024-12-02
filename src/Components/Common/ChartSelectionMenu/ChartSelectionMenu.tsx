import { type ReactElement, memo } from 'react';
import cn from 'classnames';
import classes from './ChartSelectionMenu.module.scss';
import bar from '../../../assets/images/chart/bar.png';
import line from '../../../assets/images/chart/line.png';
import radar from '../../../assets/images/chart/radar.png';
import pie from '../../../assets/images/chart/pie.png';
import doughnut from '../../../assets/images/chart/doughnut.png';
import horizontalBar from '../../../assets/images/chart/horizontalBar.png';
import { ChartSelectionButton } from '../Buttons/ChartSelectionButton/ChartSelectionButton';
import { ChartType } from '../../../utils/types/enums';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { viewSelector } from '../../../redux/selectors/selectors';

type PropsType = {
  type: string;
  className: string;
  hideChartSelectionMenuTitle?: boolean;
};

export const ChartSelectionMenu = memo<PropsType>(({ type, className, hideChartSelectionMenuTitle }): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.chartSelectionForm}>
      {!hideChartSelectionMenuTitle && (
        <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>Вид</h3>
      )}
      <div className={cn(classes.chartsTypeContainer, className)}>
        <ChartSelectionButton
          isDisabled={type === ChartType.Bar}
          type={ChartType.Bar}
          src={bar}
          text="Колонны"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Bar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.HBar}
          type={ChartType.HBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.HBar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Line}
          type={ChartType.Line}
          src={line}
          text="Линии"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Line })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Radar}
          type={ChartType.Radar}
          src={radar}
          text="Радар"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Radar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Pie}
          type={ChartType.Pie}
          src={pie}
          text="Пирог"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Pie })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Doughnut}
          type={ChartType.Doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Doughnut })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
      </div>
    </div>
  );
});
