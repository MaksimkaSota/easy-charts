import { type FC, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './View.module.scss';
import LightMode from '../../../assets/images/content/sun.svg';
import DarkMode from '../../../assets/images/content/moon.svg';
import RuMode from '../../../assets/images/content/ru.svg';
import EnMode from '../../../assets/images/content/en.svg';
import { AltTxtKey, Language, Theme } from '../../../utils/types/enums';

type PropsType = {
  themeMode: string;
  languageMode: string;
  setThemeMode: (themeMode: string) => void;
  setLanguageMode: (languageMode: string) => void;
};

export const View: FC<PropsType> = ({ themeMode, languageMode, setThemeMode, setLanguageMode }): ReactElement => {
  const { t, i18n } = useTranslation();

  const onThemeMode = (): void => {
    const newThemeMode = themeMode === Theme.Light ? Theme.Dark : Theme.Light;
    setThemeMode(newThemeMode);
  };

  const onLanguageMode = (): void => {
    const newLanguageMode = languageMode === Language.Ru ? Language.En : Language.Ru;
    setLanguageMode(newLanguageMode);
    i18n.changeLanguage(newLanguageMode);
  };

  return (
    <div className={classes.viewContainer}>
      <button className={cn(classes.modeContainer, classes.themeModeContainer)} onClick={onThemeMode}>
        {themeMode === Theme.Light && <LightMode className={classes.mode} alt={t(AltTxtKey.Sun)} />}
        {themeMode === Theme.Dark && <DarkMode className={classes.mode} alt={t(AltTxtKey.Moon)} />}
      </button>
      <button
        className={cn(
          classes.modeContainer,
          classes.languageModeContainer,
          classes[`languageModeContainer-${themeMode}`]
        )}
        onClick={onLanguageMode}
      >
        {languageMode === Language.Ru && <RuMode className={classes.mode} alt={t(AltTxtKey.RuFlag)} />}
        {languageMode === Language.En && <EnMode className={classes.mode} alt={t(AltTxtKey.EnFlag)} />}
      </button>
    </div>
  );
};
