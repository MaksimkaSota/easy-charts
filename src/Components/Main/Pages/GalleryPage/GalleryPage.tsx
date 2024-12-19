import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './GalleryPage.module.scss';
import bar from '../../../../assets/images/chart/bar.png';
import line from '../../../../assets/images/chart/line.png';
import radar from '../../../../assets/images/chart/radar.png';
import pie from '../../../../assets/images/chart/pie.png';
import doughnut from '../../../../assets/images/chart/doughnut.png';
import horizontalBar from '../../../../assets/images/chart/horizontalBar.png';
import { ChartSelectionButton } from '../../../Common/Buttons/ChartSelectionButton/ChartSelectionButton';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { ChartTxtKey, ChartType, ContentTxtKey } from '../../../../utils/types/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';

type PropsType = {
  isMainGallery?: boolean;
  isInfoGallery?: boolean;
  hidePageDescription?: boolean;
  hidePageDescriptionText?: boolean;
  hideChartSelectionButtonText?: boolean;
};

export const GalleryPage: FC<PropsType> = ({
  isMainGallery,
  isInfoGallery,
  hidePageDescription,
  hidePageDescriptionText,
  hideChartSelectionButtonText,
}): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  return (
    <div
      className={cn(classes.gallery, {
        [classes.mainPageGallery]: isMainGallery,
        [classes.infoPageGallery]: isInfoGallery,
      })}
    >
      {!hidePageDescription && (
        <PageDescription
          title={t(ContentTxtKey.GalleryTitle)}
          textContent={t(ContentTxtKey.GalleryDescription)}
          hidePageDescriptionText={hidePageDescriptionText}
        />
      )}
      <div className={classes.typeChartsContainer}>
        <ChartSelectionButton
          isLink
          type={ChartType.Bar}
          src={bar}
          text={t(ChartTxtKey.Bar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.HBar}
          src={horizontalBar}
          text={t(ChartTxtKey.HBar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Line}
          src={line}
          text={t(ChartTxtKey.Line)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Radar}
          src={radar}
          text={t(ChartTxtKey.Radar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Pie}
          src={pie}
          text={t(ChartTxtKey.Pie)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Doughnut}
          src={doughnut}
          text={t(ChartTxtKey.Doughnut)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
      </div>
    </div>
  );
};
