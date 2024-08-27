import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Chart.module.scss';
import { IChart } from '../../../../../utils/types/api';

type PropsType = {
  address: string;
  options: IChart;
  setNewOptions: (exampleOptions: IChart) => void;
};

export const ExampleChart: FC<PropsType> = ({address, options, setNewOptions}): ReactElement => {
  return (
    <>
      <div className={classes.imageContainer}>
        <img src={address} alt="Chart example" />
      </div>
      <NavLink to="create" className={classes.link} onClick={() => setNewOptions(options)}>
        Отредактировать график:{' '}
        <span>
          {options.options.title.text.split(',').shift()}
        </span>
      </NavLink>
    </>
  );
};
