import type { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { viewSelector } from '../../redux/selectors/selectors';
import { Header } from './Header';
import { useActions } from '../../hooks/useActions';

export const HeaderContainer: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { setThemeMode } = useActions();

  return <Header themeMode={themeMode} setThemeMode={setThemeMode} />;
};
