import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './App.module.scss';
import { HeaderContainer } from './Header/HeaderContainer';
import { Footer } from './Footer/Footer';
import { MainRoutes } from './Main/MainRoutes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { viewSelector } from '../redux/selectors/selectors';

export const App: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={cn(classes.wrapper, classes[`wrapper-${themeMode}`])}>
      <HeaderContainer />
      <main className={classes.main}>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};
