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
        textContent="Выберите необходимый вид графика, далее вы перейдёте в режим
        онлайн-конструктора, в котором сможете заполнить данные графика, и затем
        скачать. Какую график вам необходимо построить? Столбчатый, линейный,
        круговой…?"
      />
      <div className={classes.typeChartsContainer}>
        <ChartSelectionButton
          isLink
          type={ChartType.bar}
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.hBar}
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.line}
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.radar}
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.pie}
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <ChartSelectionButton
          isLink
          type={ChartType.doughnut}
          src={doughnut}
          text="Пончик"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
};
