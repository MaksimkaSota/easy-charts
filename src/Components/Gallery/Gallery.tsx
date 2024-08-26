import classes from './Gallery.module.scss';
import bar from '../../assets/images/bar.png';
import line from '../../assets/images/line.png';
import radar from '../../assets/images/radar.png';
import pie from '../../assets/images/pie.png';
import doughnut from '../../assets/images/doughnut.png';
import horizontalBar from '../../assets/images/horizontalBar.png';
import { TypeSelection } from '../Common/TypeSelection/TypeSelection';

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <h2 className={classes.title}>Галерея графиков</h2>
      <p className={classes.textContent}>
        Выберите необходимый вид графика, далее вы перейдёте в режим
        онлайн-конструктора, в котором сможете заполнить данные графика, и затем
        скачать. Какую график вам необходимо построить? Столбчатый, линейный,
        круговой…?
      </p>
      <div className={classes.typeChartsContainer}>
        <TypeSelection
          isLink
          type="bar"
          src={bar}
          text="Колонны"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink
          type="horizontalBar"
          src={horizontalBar}
          text="Полосы"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink
          type="line"
          src={line}
          text="Линии"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink
          type="radar"
          src={radar}
          text="Радар"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink
          type="pie"
          src={pie}
          text="Пирог"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
        <TypeSelection
          isLink
          type="doughnut"
          src={doughnut}
          text="Пончик"
          classNameContainer={classes.imageContainer}
          classNameText={classes.typeName}
        />
      </div>
    </div>
  );
};

export default Gallery;
