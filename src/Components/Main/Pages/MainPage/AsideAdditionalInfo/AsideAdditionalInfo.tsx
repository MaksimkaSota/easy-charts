import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './AsideAdditionalInfo.module.scss';
import { WeatherContainer } from './Weather/WeatherContainer';
import { CurrencyContainer } from './CurrencyForm/CurrencyContainer';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../redux/selectors/selectors';

export const AsideAdditionalInfo: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <aside className={cn(classes.asideInfo, classes[`asideInfo-${themeMode}`])}>
      <WeatherContainer />
      <CurrencyContainer />
    </aside>
  );
};
