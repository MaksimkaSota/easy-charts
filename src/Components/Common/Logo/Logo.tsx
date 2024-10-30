import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Logo.module.scss';
import logo from '../../../assets/images/content/logo.png';

type PropsType = {
  className?: string;
};

export const Logo: FC<PropsType> = ({ className }): ReactElement => {
  return (
    <div className={cn(classes.logo, className)}>
      <h1 className={classes.logoText}>
        <span className={classes.letterRed}>E</span>
        <span className={classes.letterOrange}>a</span>
        <span className={classes.letterBlue}>s</span>
        <span className={classes.letterGreen}>y</span>
        <span className={classes.letterRed}>C</span>
        <span className={classes.letterOrange}>h</span>
        <span className={classes.letterBlue}>a</span>
        <span className={classes.letterGreen}>r</span>
        <span className={classes.letterRed}>t</span>
        <span className={classes.letterOrange}>s</span>
      </h1>
      <img className={classes.logoImage} src={logo} alt="Логотип" />
    </div>
  );
};
