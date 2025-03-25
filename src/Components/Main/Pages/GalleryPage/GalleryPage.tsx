import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './GalleryPage.module.scss';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { ChartSelectionButton } from '../../../Common/Buttons/ChartSelectionButton/ChartSelectionButton';
import Bar from '../../../../assets/images/chart/bar.svg';
import HorizontalBar from '../../../../assets/images/chart/horizontalBar.svg';
import Line from '../../../../assets/images/chart/line.svg';
import Radar from '../../../../assets/images/chart/radar.svg';
import Pie from '../../../../assets/images/chart/pie.svg';
import Doughnut from '../../../../assets/images/chart/doughnut.svg';
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
          Chart={Bar}
          text={t(ChartTxtKey.Bar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.HBar}
          Chart={HorizontalBar}
          text={t(ChartTxtKey.HBar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Line}
          Chart={Line}
          text={t(ChartTxtKey.Line)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Radar}
          Chart={Radar}
          text={t(ChartTxtKey.Radar)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Pie}
          Chart={Pie}
          text={t(ChartTxtKey.Pie)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Doughnut}
          Chart={Doughnut}
          text={t(ChartTxtKey.Doughnut)}
          classNameContainer={classes.imageContainer}
          classNameText={cn(classes.typeName, classes[`typeName-${themeMode}`])}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
      </div>
    </div>
  );
};
