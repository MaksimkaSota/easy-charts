import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import classes from './ChartResultExamples.module.scss';

const ChartResultExamples = () => {
  const {exampleFirstAddress, exampleSecondAddress, exampleThirdAddress} = useTypedSelector((state) => state.addresses);
  const {exampleFirst, exampleSecond, exampleThird} = useTypedSelector((state) => state.examplesOptions);
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

export default ChartResultExamples;
