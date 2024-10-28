import type { FC, ReactElement } from 'react';
import classes from './MainPage.module.scss';
import { Animation } from '../../../Common/Animation/Animation';

export const MainPage: FC = (): ReactElement => {
  return (
    <div className={classes.main}>
      <Animation />
    </div>
  );
};
