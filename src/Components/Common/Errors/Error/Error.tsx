import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Error.module.scss';
import robotError from '../../../../assets/images/service/robot-error.png';
import robot404 from '../../../../assets/images/service/robot-404.png';
import { AltTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  message: string;
  code?: number;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ message, code, isGlobalError = false }): ReactElement => {
  const { t } = useTranslation();

  const robot = code === 404 ? robot404 : robotError;

  return (
    <div className={cn(classes.errorPageBlock, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>{code} Ошибка</h3>
      <img className={classes.errorImage} src={robot} alt={t(AltTxtKey.Error)} />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
