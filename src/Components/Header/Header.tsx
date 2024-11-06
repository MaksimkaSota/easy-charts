import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';
import { RoutePath } from '../../utils/types/enums';

export const Header: FC = (): ReactElement => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <NavLink to={RoutePath.Main}>
          <Logo isHeader />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};
