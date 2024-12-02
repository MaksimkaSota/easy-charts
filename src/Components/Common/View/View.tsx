import type { FC, ReactElement } from 'react';
import classes from './View.module.scss';
import LightMode from '../../../assets/images/content/sun.svg';
import DarkMode from '../../../assets/images/content/moon.svg';
import { Theme } from '../../../utils/types/enums';

type PropsType = {
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
};

export const View: FC<PropsType> = ({ themeMode, setThemeMode }): ReactElement => {
  const onThemeMode = (): void => {
    const newThemeMode = themeMode === Theme.Light ? Theme.Dark : Theme.Light;
    setThemeMode(newThemeMode);
  };

  return (
    <div className={classes.viewContainer}>
      <button className={classes.themeModeContainer} onClick={onThemeMode}>
        {themeMode === Theme.Light && <LightMode className={classes.themeMode} />}
        {themeMode === Theme.Dark && <DarkMode className={classes.themeMode} />}
      </button>
    </div>
  );
};
