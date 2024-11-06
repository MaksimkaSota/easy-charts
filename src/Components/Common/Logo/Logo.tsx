import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Logo.module.scss';
import logo from '../../../assets/images/content/logo.png';

type PropsType = {
  isHeader?: boolean;
};

export const Logo: FC<PropsType> = ({ isHeader }): ReactElement => {
  return (
    <div className={cn(classes.logo, { [classes.headerLogo]: isHeader })}>
      <h1 className={classes.logoText}>
        <span className={cn(classes.e, classes.letterRed)}>E</span>
        <span className={cn(classes.a1, classes.letterOrange)}>a</span>
        <span className={cn(classes.s1, classes.letterBlue)}>s</span>
        <span className={cn(classes.y, classes.letterGreen)}>y</span>
        <span className={cn(classes.c, classes.letterRed)}>C</span>
        <span className={cn(classes.h, classes.letterOrange)}>h</span>
        <span className={cn(classes.a2, classes.letterBlue)}>a</span>
        <span className={cn(classes.r, classes.letterGreen)}>r</span>
        <span className={cn(classes.t, classes.letterRed)}>t</span>
        <span className={cn(classes.s2, classes.letterOrange)}>s</span>
      </h1>
      <img className={classes.logoImage} src={logo} alt="Логотип" />
    </div>
  );
};
