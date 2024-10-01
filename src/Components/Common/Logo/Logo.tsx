import type { FC, ReactElement } from 'react';
import classes from './Logo.module.scss';
import logo from '../../../assets/images/logo.png';

export const Logo: FC = (): ReactElement => {
  return (
    <div className={classes.logo}>
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
      <div className={classes.imageContainer}>
        <img src={logo} alt="Логотип" />
      </div>
    </div>
  );
};
