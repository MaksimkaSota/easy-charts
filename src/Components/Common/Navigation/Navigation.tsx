import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { RoutePath } from '../../../utils/types/enums';

export const Navigation: FC = (): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  return (
    <nav className={classes.navigation}>
      <NavLink to={RoutePath.create} className={setClass}>
        Создать
      </NavLink>
      <NavLink to={RoutePath.gallery} className={setClass}>
        Галерея
      </NavLink>
      <NavLink to={RoutePath.examples} className={setClass}>
        Примеры
      </NavLink>
      <NavLink to={RoutePath.contacts} className={setClass}>
        Контакты
      </NavLink>
    </nav>
  );
};
