import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classes from './Chart.module.scss';
import { IChart } from '../../../../../utils/types/api';

type PropsType = {
  exampleAddress: string;
  exampleOptions: IChart;
  setNewMainOptions: (exampleOptions: IChart) => void;
};

export const ExampleChart: FC<PropsType> = ({exampleAddress, exampleOptions, setNewMainOptions}): ReactElement => {
  return (
    <>
      <div className={classes.imageContainer}>
        <img src={exampleAddress} alt="Chart example" />
      </div>
      <Link to="create" className={classes.link} onClick={() => setNewMainOptions(exampleOptions)}>
        Отредактировать график:{' '}
        <span>
          {exampleOptions.options.title.text.split(',').shift()}
        </span>
      </Link>
    </>
  );
};
