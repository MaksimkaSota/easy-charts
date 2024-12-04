import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';
import { View } from '../Common/View/View';
import { RoutePath } from '../../utils/types/enums';

type PropsType = {
  themeMode: string;
  languageMode: string;
  setThemeMode: (themeMode: string) => void;
  setLanguageMode: (languageMode: string) => void;
};

export const Header: FC<PropsType> = ({ themeMode, languageMode, setThemeMode, setLanguageMode }): ReactElement => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.navigationBlock}>
          <NavLink to={RoutePath.Main}>
            <Logo isHeader />
          </NavLink>
          <Navigation />
        </div>
        <View
          themeMode={themeMode}
          languageMode={languageMode}
          setThemeMode={setThemeMode}
          setLanguageMode={setLanguageMode}
        />
      </div>
    </header>
  );
};
