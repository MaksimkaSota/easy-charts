import { FC, ReactElement } from 'react';
import classes from './ExampleCharts.module.scss';
import { ExampleChart } from '../ExampleChart/ExampleChart';
import { IChart } from '../../../../../utils/types/api';

type PropsType = {
  firstAddress: string;
  secondAddress: string;
  thirdAddress: string;
  firstOptions: IChart;
  secondOptions: IChart;
  thirdOptions: IChart;
  setNewOptions: (options: IChart) => void;
};

export const ExampleCharts: FC<PropsType> = ({
                                               firstAddress,
                                               secondAddress,
                                               thirdAddress,
                                               firstOptions,
                                               secondOptions,
                                               thirdOptions,
                                               setNewOptions
                                             }): ReactElement => {
  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <ExampleChart
        address={firstAddress}
        options={firstOptions}
        setNewOptions={setNewOptions}
      />
      <ExampleChart
        address={secondAddress}
        options={secondOptions}
        setNewOptions={setNewOptions}
      />
      <ExampleChart
        address={thirdAddress}
        options={thirdOptions}
        setNewOptions={setNewOptions}
      />
    </div>
  );
};
