import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Error.module.scss';
import { Image } from '../../Image/Image';
import Robot404Min from '../../../../assets/images/service/robot-404.svg';
import robot404Max from '../../../../assets/images/service/robot-404.png';
import RobotErrorMin from '../../../../assets/images/service/robot-error.svg';
import robotErrorMax from '../../../../assets/images/service/robot-error.png';
import { AltTxtKey, ErrorTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  message: string;
  code?: number;
  isGlobalError?: boolean;
};

export const Error: FC<PropsType> = ({ message, code, isGlobalError = false }): ReactElement => {
  const { t } = useTranslation();

  const RobotMin = code === 404 ? Robot404Min : RobotErrorMin;
  const robotMax = code === 404 ? robot404Max : robotErrorMax;

  return (
    <div className={cn(classes.errorPageBlock, { [classes.globalError]: isGlobalError })}>
      <h3 className={classes.errorTitle}>
        {code} {t(ErrorTxtKey.Error)}
      </h3>
      <Image ImageSVG={RobotMin} image={robotMax} altTxt={t(AltTxtKey.Error)} className={classes.errorImage} />
      <p className={classes.errorText}>{message}</p>
    </div>
  );
};
