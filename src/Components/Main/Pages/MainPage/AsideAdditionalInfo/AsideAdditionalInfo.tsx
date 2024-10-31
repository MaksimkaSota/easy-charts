import type { FC, ReactElement } from 'react';
import classes from './AsideAdditionalInfo.module.scss';
import { Weather } from './Weather/Weather';
import { CurrencyFormContainer } from './CurrencyForm/CurrencyFormContainer';

type PropsType = {};

export const AsideAdditionalInfo: FC<PropsType> = (): ReactElement => {
  return (
    <aside className={classes.asideInfo}>
      <Weather />
      <CurrencyFormContainer />
    </aside>
  );
};
