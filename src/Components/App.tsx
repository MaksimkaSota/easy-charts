import type { FC, ReactElement } from 'react';
import classes from './App.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { MainRoutes } from './Main/MainRoutes';

export const App: FC = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};
