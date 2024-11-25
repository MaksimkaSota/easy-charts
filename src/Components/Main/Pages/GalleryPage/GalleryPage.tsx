import type { FC, ReactElement } from 'react';
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
import { ChartType } from '../../../../utils/types/enums';

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
  return (
    <div
      className={cn(classes.gallery, {
        [classes.mainPageGallery]: isMainGallery,
        [classes.infoPageGallery]: isInfoGallery,
      })}
    >
      {!hidePageDescription && (
        <PageDescription
          title="Галерея графиков / диаграмм"
          textContent="Выберите необходимый вид графика, далее вы перейдёте в режим онлайн-конструктора, в котором
          сможете заполнить данные графика, и затем сохранить на комьютер. Какой график вам необходимо построить?
          Колонны, полосы, линии, радар, пирог, пончик?"
          hidePageDescriptionText={hidePageDescriptionText}
        />
      )}
      <div className={classes.typeChartsContainer}>
        <ChartSelectionButton
          isLink
          type={ChartType.Bar}
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.HBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Line}
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Radar}
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Pie}
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
          hideChartSelectionButtonText={hideChartSelectionButtonText}
        />
      </div>
    </div>
  );
};
