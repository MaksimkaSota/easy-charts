import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../../../hooks/useTypeSelector';
import { useActions } from '../../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector } from '../../../../../redux/selectors/selectors';
import classes from './ExampleCharts.module.scss';

export const ExampleCharts: FC = (): ReactElement => {
  const {exampleFirstAddress, exampleSecondAddress, exampleThirdAddress} = useTypedSelector(addressesSelector);
  const {exampleFirst, exampleSecond, exampleThird} = useTypedSelector(examplesOptionsSelector);
  const {setNewMainOptions} = useActions();

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={exampleFirstAddress} alt="Chart example" />
      </div>
      <Link to="create" className={classes.link} onClick={() => setNewMainOptions(exampleFirst)}>
        Отредактировать график:{' '}
        <span>
          {exampleFirst.options.title.text.split(',').shift()}
        </span>
      </Link>
      <div className={classes.imageContainer}>
        <img src={exampleSecondAddress} alt="Chart example" />
      </div>
      <Link to="create" className={classes.link} onClick={() => setNewMainOptions(exampleThird)}>
        Отредактировать график:{' '}
        <span>
          {exampleSecond.options.title.text.split(',').shift()}
        </span>
      </Link>
      <div className={classes.imageContainer}>
        <img src={exampleThirdAddress} alt="Chart example" />
      </div>
      <Link to="create" className={classes.link} onClick={() => setNewMainOptions(exampleThird)}>
        Отредактировать график:{' '}
        <span>
          {exampleThird.options.title.text.split(',').shift()}
        </span>
      </Link>
    </div>
  );
};
