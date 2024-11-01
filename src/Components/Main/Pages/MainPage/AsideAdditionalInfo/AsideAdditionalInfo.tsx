import type { FC, ReactElement } from 'react';
import classes from './AsideAdditionalInfo.module.scss';
import { WeatherContainer } from './Weather/WeatherContainer';
import { CurrencyFormContainer } from './CurrencyForm/CurrencyFormContainer';

export const AsideAdditionalInfo: FC = (): ReactElement => {
  return (
    <aside className={classes.asideInfo}>
      <WeatherContainer />
      <CurrencyFormContainer />
    </aside>
  );
};
