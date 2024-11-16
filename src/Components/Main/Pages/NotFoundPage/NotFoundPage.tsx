import type { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Errors/Error/Error';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage: FC = (): ReactElement => {
  const { pathname } = useLocation();
  const message = `Запрошенный URL-адрес "${pathname}" не найден на этом сервере!`;

  return (
    <div className={classes.container}>
      <Error message={message} code={404} />
    </div>
  );
};
