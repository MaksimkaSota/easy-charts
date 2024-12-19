import { type FC, type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Footer.module.scss';
import { Navigation } from '../Common/Navigation/Navigation';
import { Logo } from '../Common/Logo/Logo';
import { ContentTxtKey } from '../../utils/types/enums';
import { BurgerButton } from '../Common/Buttons/BurgerButton/BurgerButton';

export const Footer: FC = (): ReactElement => {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <div className={classes.logoBlock}>
        <Logo className={classes.footerLogo} />
        <BurgerButton showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />
      </div>
      <p className={classes.text}>{t(ContentTxtKey.FooterText)}</p>
      <Navigation
        className={classes.footerNavigation}
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={setShowBurgerMenu}
      />
    </footer>
  );
};
