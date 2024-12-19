import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './MainAdditionalInfo.module.scss';
import { PageDescription } from '../../../../Common/PageDescription/PageDescription';
import { CreateButton } from '../../../../Common/Buttons/CreateButton/CreateButton';
import { InfoCard } from '../../../../Common/InfoCard/InfoCard';
import Phone from '../../../../../assets/images/content/phone.svg';
import Share from '../../../../../assets/images/content/share.svg';
import Download from '../../../../../assets/images/content/download.svg';
import { ContentTxtKey } from '../../../../../utils/types/enums';

export const MainAdditionalInfo: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.mainInfo}>
      <PageDescription title={t(ContentTxtKey.MainTitle)} textContent={t(ContentTxtKey.MainDescription)} />
      <CreateButton />
      <div className={classes.info}>
        <InfoCard TagSVG={Phone} boldText={t(ContentTxtKey.CreateBoldText)} text={t(ContentTxtKey.CreateText)} />
        <InfoCard TagSVG={Share} boldText={t(ContentTxtKey.ShareBoldText)} text={t(ContentTxtKey.ShareText)} />
        <InfoCard TagSVG={Download} boldText={t(ContentTxtKey.SaveBoldText)} text={t(ContentTxtKey.SaveText)} />
      </div>
    </div>
  );
};
