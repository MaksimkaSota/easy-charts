import { type FC, type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './InfoPage.module.scss';
import { InfoBlock } from './InfoBlock/InfoBlock';
import { CreateButton } from '../../../Common/Buttons/CreateButton/CreateButton';
import Info from '../../../../assets/images/content/info.svg';
import doughnut from '../../../../assets/images/chart/doughnut.png';
import { RoutePath } from '../../../../utils/types/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';

export const InfoPage: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.infoPage}>
      <div className={classes.infoPageHeader}>
        <div className={classes.imageContainer}>
          <Info className={classes.infoImage} />
          <img className={classes.doughnutImage} src={doughnut} alt="Пончик" />
        </div>
        <h2 className={cn(classes.pageTitle, classes[`pageTitle-${themeMode}`])}>
          Как создать график / диаграмму онлайн на сайте EasyCharts
        </h2>
        <p className={classes.text}>
          Вы можете посмотреть{' '}
          <NavLink to={RoutePath.Examples} className={classes.link}>
            примеры
          </NavLink>{' '}
          графиков и создать свой из подходящего.
        </p>
        <p className={classes.text}>Ниже описана инструкция, как создать график. Это просто:</p>
      </div>
      <InfoBlock
        titleText="1. Выберите вид графика"
        descriptionText={
          'На странице создания или в галерее выберите подходящий вам вид графика. \n' +
          'Как вам необходимо отобразить ваши данные? \n' +
          'Колонны / полосы / линии / радар / пирог / пончик?'
        }
        isFirstInfoBlock
      />
      <InfoBlock
        titleText="2. Заполните таблицу данных"
        descriptionText={
          'Для того, чтобы построить график, необходимо заполнить таблицу данных. \n' +
          'Значения в первой колонке станут отметками по горизонтали (ось X). \n' +
          'Остальные колонки (их может быть одна или несколько) – это значения, \n' +
          'которые соответствуют отметкам из первой колонки, и которые будут отображены на диаграмме (ось Y).'
        }
        isSecondInfoBlock
      />
      <InfoBlock
        titleText="3. Готово!"
        descriptionText="Теперь график можно посмотреть и сохранить в полном размере (в формате PNG) или
        получить ссылку и поделиться им."
        isThirdInfoBlock
      />
      <CreateButton />
    </div>
  );
};
