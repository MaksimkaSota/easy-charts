import { FC, ReactElement } from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypeSelector';
import { useActions } from '../../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../../redux/selectors/selectors';
import classes from './ExampleCharts.module.scss';
import { ExampleChart } from '../ExampleChart/ExampleChart';

export const ExampleCharts: FC = (): ReactElement => {
  const {exampleFirstAddress, exampleSecondAddress, exampleThirdAddress} = useTypedSelector(addressesSelector);
  const {exampleFirstOptions, exampleSecondOptions, exampleThirdOptions} = useTypedSelector(examplesOptionsSelector);
  const {setNewMainOptions} = useActions();

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <ExampleChart
        exampleAddress={exampleFirstAddress}
        exampleOptions={exampleSecondOptions}
        setNewMainOptions={setNewMainOptions}
      />
      <ExampleChart
        exampleAddress={exampleSecondAddress}
        exampleOptions={exampleFirstOptions}
        setNewMainOptions={setNewMainOptions}
      />
      <ExampleChart
        exampleAddress={exampleThirdAddress}
        exampleOptions={exampleThirdOptions}
        setNewMainOptions={setNewMainOptions}
      />
    </div>
  );
};
