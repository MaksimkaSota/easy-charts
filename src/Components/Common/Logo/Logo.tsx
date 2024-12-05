import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Logo.module.scss';
import logo from '../../../assets/images/content/logo.png';
import { RoutePath, AltTxtKey } from '../../../utils/types/enums';

type PropsType = {
  isHeader?: boolean;
};

export const Logo: FC<PropsType> = ({ isHeader }): ReactElement => {
  const { pathname } = useLocation();

  const { t } = useTranslation();

  return (
    <div
      className={cn(classes.logo, {
        [classes.headerLogo]: isHeader,
        [classes.activeHeaderLogo]: isHeader && pathname !== RoutePath.Main,
      })}
    >
      <h1 className={classes.logoText}>
        <span className={cn(classes.letter, classes.e, classes.letterRed)}>E</span>
        <span className={cn(classes.letter, classes.a1, classes.letterOrange)}>a</span>
        <span className={cn(classes.letter, classes.s1, classes.letterBlue)}>s</span>
        <span className={cn(classes.letter, classes.y, classes.letterGreen)}>y</span>
        <span className={cn(classes.letter, classes.c, classes.letterRed)}>C</span>
        <span className={cn(classes.letter, classes.h, classes.letterOrange)}>h</span>
        <span className={cn(classes.letter, classes.a2, classes.letterBlue)}>a</span>
        <span className={cn(classes.letter, classes.r, classes.letterGreen)}>r</span>
        <span className={cn(classes.letter, classes.t, classes.letterRed)}>t</span>
        <span className={cn(classes.letter, classes.s2, classes.letterOrange)}>s</span>
      </h1>
      <img className={classes.logoImage} src={logo} alt={t(AltTxtKey.Logo)} />
    </div>
  );
};
