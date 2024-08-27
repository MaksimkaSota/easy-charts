import { useTypedSelector } from '../../hooks/useTypeSelector';
import { addressesSelector } from '../../redux/selectors/selectors';
import classes from './ChartResult.module.scss';

const ChartResult = () => {
  const {mainAddress} = useTypedSelector(addressesSelector);

  return (
    <div className={classes.chartResult}>
      <h3 className={classes.miniTitle}>График</h3>
      <div className={classes.imageContainer}>
        <img src={mainAddress} alt="Charts" />
      </div>
    </div>
  );
};

export default ChartResult;
