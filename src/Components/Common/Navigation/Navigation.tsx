import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import classes from './Navigation.module.scss';
import { mainInitialValue } from '../../../utils/initialValues/mainInitialValue';
import { RoutePath } from '../../../utils/types/enums';

export const Navigation: FC = (): ReactElement => {
  const { setNewMainOptions } = useActions();

  return (
    <nav className={classes.navigation}>
      <NavLink to={RoutePath.create} className={classes.link} onClick={() => setNewMainOptions(mainInitialValue)}>
        Создать
      </NavLink>
      <NavLink to={RoutePath.gallery} className={classes.link} onClick={() => setNewMainOptions(mainInitialValue)}>
        Галерея
      </NavLink>
      <NavLink to={RoutePath.examples} className={classes.link}>
        Примеры
      </NavLink>
      <NavLink to={RoutePath.contacts} className={classes.link}>
        Контакты
      </NavLink>
    </nav>
  );
};
