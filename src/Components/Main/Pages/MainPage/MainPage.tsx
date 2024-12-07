import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainPage.module.scss';
import { Animation } from '../../../Common/Animation/Animation';
import { MainAdditionalInfo } from './MainAdditionalInfo/MainAdditionalInfo';
import { AsideAdditionalInfo } from './AsideAdditionalInfo/AsideAdditionalInfo';
import { GalleryPage } from '../GalleryPage/GalleryPage';
import { ExamplesPageContainer } from '../ExamplesPage/ExamplesPageContainer';
import { RoutePath } from '../../../../utils/types/enums';

export const MainPage: FC = (): ReactElement => {
  return (
    <div className={classes.main}>
      <Animation />
      <div className={classes.additionalInfo}>
        <MainAdditionalInfo />
        <AsideAdditionalInfo />
      </div>
      <GalleryPage isMainGallery hidePageDescriptionText />
      <ExamplesPageContainer
        isMainExamples
        hidePageDescriptionText
        hideExampleChartsTitle
        hideChartSelectionMenuTitle
      />
      <p className={classes.description}>
        <span className={classes.name}>EasyCharts</span> - сайт для построения графиков / диаграмм онлайн. Выберите{' '}
        <NavLink to={RoutePath.Gallery} className={classes.link}>
          вид графика
        </NavLink>{' '}
        (колонны, полосы, линии, радар, пирог, пончик), заполните таблицы данных, и график готов!{' '}
        <NavLink to={RoutePath.Create} className={classes.link}>
          Онлайн-конструктор
        </NavLink>{' '}
        можно использовать для просмотра и сохранения графика в полном размере (в формате PNG). После этого можно
        вставить его в Excel или Word, а также другие программы на компьютере. Можно получить ссылку на страницу
        графика, чтобы поделиться им. Построить график онлайн очень просто! Читайте подробнее о том, как создать график
        онлайн{' '}
        <NavLink to={RoutePath.Info} className={classes.link}>
          здесь
        </NavLink>
        . Также можно посмотреть{' '}
        <NavLink to={RoutePath.Examples} className={classes.link}>
          примеры
        </NavLink>
        , чтобы на их основе создать необходимый график.
      </p>
    </div>
  );
};
