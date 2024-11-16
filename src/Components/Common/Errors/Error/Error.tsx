import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Error.module.scss';
import robotError from '../../../../assets/images/service/robot-error.png';
import robot404 from '../../../../assets/images/service/robot-404.png';

type PropsType = {
  message: string;
  code?: number;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ message, code, isGlobalError = false }): ReactElement => {
  const robot = code === 404 ? robot404 : robotError;

  return (
    <div className={cn(classes.errorPageBlock, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>{code} Ошибка</h3>
      <img className={classes.errorImage} src={robot} alt="Ошибка" />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
