import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Footer.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';
import { ContentTxtKey } from '../../utils/types/enums';

export const Footer: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Logo />
      <p className={classes.text}>{t(ContentTxtKey.FooterText)}</p>
      <Navigation />
    </footer>
  );
};
