import { type FC, type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './InfoPage.module.scss';
import { InfoBlock } from './InfoBlock/InfoBlock';
import { CreateButton } from '../../../Common/Buttons/CreateButton/CreateButton';
import Info from '../../../../assets/images/content/info.svg';
import doughnut from '../../../../assets/images/chart/doughnut.png';
import { AltTxtKey, ContentTxtKey, RoutePath } from '../../../../utils/types/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';

export const InfoPage: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  return (
    <div className={classes.infoPage}>
      <div className={classes.infoPageHeader}>
        <div className={classes.imageContainer}>
          <Info className={classes.infoImage} />
          <img className={classes.doughnutImage} src={doughnut} alt={t(AltTxtKey.Info)} />
        </div>
        <h2 className={cn(classes.pageTitle, classes[`pageTitle-${themeMode}`])}>{t(ContentTxtKey.InfoTitle)}</h2>
        <p className={classes.text}>
          <Trans i18nKey={ContentTxtKey.InfoDescription1}>
            Вы можете посмотреть
            <NavLink to={RoutePath.Examples} className={classes.link}>
              примеры
            </NavLink>
            графиков и создать свой из подходящего.
          </Trans>
        </p>
        <p className={classes.text}>{t(ContentTxtKey.InfoDescription2)}</p>
      </div>
      <InfoBlock
        titleText={t(ContentTxtKey.InfoMiniTitle1)}
        descriptionText={t(ContentTxtKey.InfoMiniDescription1)}
        isFirstInfoBlock
      />
      <InfoBlock
        titleText={t(ContentTxtKey.InfoMiniTitle2)}
        descriptionText={t(ContentTxtKey.InfoMiniDescription2)}
        isSecondInfoBlock
      />
      <InfoBlock
        titleText={t(ContentTxtKey.InfoMiniTitle3)}
        descriptionText={t(ContentTxtKey.InfoMiniDescription3)}
        isThirdInfoBlock
      />
      <CreateButton />
    </div>
  );
};
