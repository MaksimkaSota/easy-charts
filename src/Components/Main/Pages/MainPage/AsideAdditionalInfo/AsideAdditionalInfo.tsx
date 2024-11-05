import type { FC, ReactElement } from 'react';
import classes from './AsideAdditionalInfo.module.scss';
import { WeatherContainer } from './Weather/WeatherContainer';
import { CurrencyContainer } from './CurrencyForm/CurrencyContainer';

export const AsideAdditionalInfo: FC = (): ReactElement => {
  return (
    <aside className={classes.asideInfo}>
      <WeatherContainer />
      <CurrencyContainer />
    </aside>
  );
};
