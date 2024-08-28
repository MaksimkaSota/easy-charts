import type { FC, ReactElement } from 'react';
import classes from './Footer.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';

export const Footer: FC = (): ReactElement => {
  return (
    <div className={classes.footer}>
      <div className={classes.center}>
        <Logo />
      </div>
      <p className={classes.text}>Создать график онлайн, 2022</p>
      <div className={classes.center}>
        <Navigation />
      </div>
    </div>
  );
};
