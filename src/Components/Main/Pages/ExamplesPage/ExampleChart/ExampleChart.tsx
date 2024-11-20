import { type ReactElement, memo } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ExampleChart.module.scss';
import type { IChart } from '../../../../../utils/types/api/chart';
import { RoutePath } from '../../../../../utils/types/enums';
import { Chart } from '../../../../Common/Chart/Chart';
import { Table } from '../../../../Common/Table/Table';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';

type PropsType = {
  isFetchingAddress: boolean;
  address: string;
  addressError: Nullable<ErrorType>;
  options: IChart;
  setNewOptions: (exampleOptions: IChart) => void;
  isInfoPage?: boolean;
  tableValue?: (string | number)[][];
};

export const ExampleChart = memo<PropsType>(
  ({ isFetchingAddress, address, addressError, options, setNewOptions, isInfoPage, tableValue }): ReactElement => {
    return (
      <div className={classes.exampleChart}>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <Chart isFetchingAddress={isFetchingAddress} address={address} addressError={addressError} />
          </div>
        </div>
        {isInfoPage && tableValue && <Table tableValue={tableValue} />}
        <NavLink to={RoutePath.Create} className={classes.link} onClick={() => setNewOptions(options)}>
          Отредактировать график:{' '}
          <span className={classes.chartName}>{options.options.title.text.split(',').shift()}</span>
        </NavLink>
      </div>
    );
  }
);
