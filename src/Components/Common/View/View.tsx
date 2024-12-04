import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './View.module.scss';
import LightMode from '../../../assets/images/content/sun.svg';
import DarkMode from '../../../assets/images/content/moon.svg';
import ruMode from '../../../assets/images/content/ru.png';
import enMode from '../../../assets/images/content/en.png';
import { Language, Theme } from '../../../utils/types/enums';

type PropsType = {
  themeMode: string;
  languageMode: string;
  setThemeMode: (themeMode: string) => void;
  setLanguageMode: (languageMode: string) => void;
};

export const View: FC<PropsType> = ({ themeMode, languageMode, setThemeMode, setLanguageMode }): ReactElement => {
  const onThemeMode = (): void => {
    const newThemeMode = themeMode === Theme.Light ? Theme.Dark : Theme.Light;
    setThemeMode(newThemeMode);
  };

  const onLanguageMode = (): void => {
    const newLanguageMode = languageMode === Language.Ru ? Language.En : Language.Ru;
    setLanguageMode(newLanguageMode);
  };

  return (
    <div className={classes.viewContainer}>
      <button className={cn(classes.modeContainer, classes.themeModeContainer)} onClick={onThemeMode}>
        {themeMode === Theme.Light && <LightMode className={classes.mode} />}
        {themeMode === Theme.Dark && <DarkMode className={classes.mode} />}
      </button>
      <button
        className={cn(
          classes.modeContainer,
          classes.languageModeContainer,
          classes[`languageModeContainer-${themeMode}`]
        )}
        onClick={onLanguageMode}
      >
        {languageMode === Language.Ru && <img src={ruMode} className={classes.mode} alt="Русский флаг" />}
        {languageMode === Language.En && <img src={enMode} className={classes.mode} alt="Английский флаг" />}
      </button>
    </div>
  );
};
