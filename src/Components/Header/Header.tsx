import { FC, ReactElement } from 'react';
import classes from './Header.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';

export const Header: FC = (): ReactElement => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
