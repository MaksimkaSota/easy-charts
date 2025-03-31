import { memo, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ChartSelectionMenu.module.scss';
import { ChartSelectionButton } from '../Buttons/ChartSelectionButton/ChartSelectionButton';
import Bar from '../../../assets/images/chart/bar.svg';
import HorizontalBar from '../../../assets/images/chart/horizontalBar.svg';
import Line from '../../../assets/images/chart/line.svg';
import Radar from '../../../assets/images/chart/radar.svg';
import Pie from '../../../assets/images/chart/pie.svg';
import Doughnut from '../../../assets/images/chart/doughnut.svg';
import { ChartTxtKey, ChartType, ContentTxtKey } from '../../../utils/types/enums';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { viewSelector } from '../../../redux/selectors/selectors';

type PropsType = {
  type: string;
  className: string;
  hideChartSelectionMenuTitle?: boolean;
};

export const ChartSelectionMenu = memo<PropsType>(({ type, className, hideChartSelectionMenuTitle }): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  return (
    <div className={classes.chartSelectionForm}>
      {!hideChartSelectionMenuTitle && (
        <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>{t(ContentTxtKey.ViewMiniTitle)}</h3>
      )}
      <div className={cn(classes.chartsTypeContainer, className)}>
        <ChartSelectionButton
          isDisabled={type === ChartType.Bar}
          type={ChartType.Bar}
          Chart={Bar}
          text={t(ChartTxtKey.Bar)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Bar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.HBar}
          type={ChartType.HBar}
          Chart={HorizontalBar}
          text={t(ChartTxtKey.HBar)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.HBar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Line}
          type={ChartType.Line}
          Chart={Line}
          text={t(ChartTxtKey.Line)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Line })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Radar}
          type={ChartType.Radar}
          Chart={Radar}
          text={t(ChartTxtKey.Radar)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Radar })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Pie}
          type={ChartType.Pie}
          Chart={Pie}
          text={t(ChartTxtKey.Pie)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Pie })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
        <ChartSelectionButton
          isDisabled={type === ChartType.Doughnut}
          type={ChartType.Doughnut}
          Chart={Doughnut}
          text={t(ChartTxtKey.Doughnut)}
          classNameContainer={cn(classes.imageContainer, { [classes.activeContainer]: type === ChartType.Doughnut })}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
        />
      </div>
    </div>
  );
});
