import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './MainChart.module.scss';
import { Chart } from '../../../../Common/Chart/Chart';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../redux/selectors/selectors';
import { ContentTxtKey } from '../../../../../utils/types/enums';

type PropsType = {
  isFetchingAddress?: boolean;
  address: string;
  addressError?: Nullable<ErrorType>;
};

export const MainChart: FC<PropsType> = ({ isFetchingAddress, address, addressError }): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  return (
    <div className={classes.chartResult}>
      <h3 className={cn(classes.miniTitle, classes[`miniTitle-${themeMode}`])}>{t(ContentTxtKey.ChartMiniTitle)}</h3>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Chart isFetchingAddress={isFetchingAddress} address={address} addressError={addressError} />
        </div>
      </div>
    </div>
  );
};
