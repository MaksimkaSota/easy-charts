import type { FC, ReactElement } from 'react';
import classes from './GalleryPage.module.scss';
import bar from '../../../../assets/images/bar.png';
import line from '../../../../assets/images/line.png';
import radar from '../../../../assets/images/radar.png';
import pie from '../../../../assets/images/pie.png';
import doughnut from '../../../../assets/images/doughnut.png';
import horizontalBar from '../../../../assets/images/horizontalBar.png';
import { ChartSelectionButton } from '../../../Common/ChartSelectionButton/ChartSelectionButton';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';
import { ChartType } from '../../../../utils/types/enums';

export const GalleryPage: FC = (): ReactElement => {
  return (
    <div className={classes.gallery}>
      <PageDescription
        title="Галерея графиков"
        textContent="Выберите необходимый вид графика, далее вы перейдёте в режим онлайн-конструктора, в котором сможете
        заполнить данные графика, и затем сохранить на комьютер. Какой график вам необходимо построить? Колонны, полосы,
        линии, радар, пирог, пончик?"
      />
      <div className={classes.typeChartsContainer}>
        <ChartSelectionButton
          isLink
          type={ChartType.Bar}
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.HBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Line}
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Radar}
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Pie}
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.Doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
};
