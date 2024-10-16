import type { FC, ReactElement } from 'react';
import classes from './Footer.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <Logo />
      <p className={classes.text}>Создать график онлайн, 2024</p>
      <Navigation />
    </footer>
  );
};
