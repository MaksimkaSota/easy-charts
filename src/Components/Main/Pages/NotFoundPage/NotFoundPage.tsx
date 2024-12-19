import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Errors/Error/Error';
import classes from './NotFoundPage.module.scss';
import { ErrorTxtKey } from '../../../../utils/types/enums';

export const NotFoundPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const message = t(ErrorTxtKey.NotFound, { pathname });

  return (
    <div className={classes.container}>
      <Error message={message} code={404} />
    </div>
  );
};
