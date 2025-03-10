import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Trans } from 'react-i18next';
import cn from 'classnames';
import classes from './MainPage.module.scss';
import { Animation } from '../../../Common/Animation/Animation';
import { MainAdditionalInfo } from './MainAdditionalInfo/MainAdditionalInfo';
import { AsideAdditionalInfo } from './AsideAdditionalInfo/AsideAdditionalInfo';
import { GalleryPage } from '../GalleryPage/GalleryPage';
import { ExamplesPageContainer } from '../ExamplesPage/ExamplesPageContainer';
import { ContentTxtKey, RoutePath } from '../../../../utils/types/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';

export const MainPage: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.main}>
      <Animation />
      <div className={classes.additionalInfo}>
        <MainAdditionalInfo />
        <AsideAdditionalInfo />
      </div>
      <GalleryPage isMainGallery hidePageDescriptionText />
      <ExamplesPageContainer
        isMainExamples
        hidePageDescriptionText
        hideExampleChartsTitle
        hideChartSelectionMenuTitle
      />
      <p className={classes.description}>
        <Trans i18nKey={ContentTxtKey.MainText}>
          <span className={cn(classes.name, classes[`name-${themeMode}`])} />
          <NavLink to={RoutePath.Gallery} className={classes.link} />
          <NavLink to={RoutePath.Create} className={classes.link} />
          <NavLink to={RoutePath.Info} className={classes.link} />
          <NavLink to={RoutePath.Examples} className={classes.link} />
        </Trans>
      </p>
    </div>
  );
};
