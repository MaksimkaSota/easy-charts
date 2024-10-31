import type { FC, ReactElement } from 'react';
import classes from './MainPage.module.scss';
import { Animation } from '../../../Common/Animation/Animation';
import { MainAdditionalInfo } from './MainAdditionalInfo/MainAdditionalInfo';
import { AsideAdditionalInfoContainer } from './AsideAdditionalInfo/AsideAdditionalInfoContainer';

export const MainPage: FC = (): ReactElement => {
  return (
    <div className={classes.main}>
      <Animation />
      <div className={classes.additionalInfo}>
        <MainAdditionalInfo />
        <AsideAdditionalInfoContainer />
      </div>
    </div>
  );
};
