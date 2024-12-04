import type { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { viewSelector } from '../../redux/selectors/selectors';
import { Header } from './Header';
import { useActions } from '../../hooks/useActions';

export const HeaderContainer: FC = (): ReactElement => {
  const { themeMode, languageMode } = useTypedSelector(viewSelector);

  const { setThemeMode, setLanguageMode } = useActions();

  return (
    <Header
      themeMode={themeMode}
      languageMode={languageMode}
      setThemeMode={setThemeMode}
      setLanguageMode={setLanguageMode}
    />
  );
};
