import type { FC, MouseEvent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { ContentTxtKey, RoutePath } from '../../../utils/types/enums';

type PropsType = {
  className: string;
  showBurgerMenu: boolean;
  setShowBurgerMenu: (showBurgerMenu: boolean) => void;
};

export const Navigation: FC<PropsType> = ({ className, showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const { t } = useTranslation();

  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if ((event.target as Element).className === classes.link) {
      setShowBurgerMenu(false);

      window.scrollTo(0, 0);
    }
  };

  return (
    // eslint-disable-next-line
    <nav
      className={cn(classes.navigation, className, { [classes.shownNavigation]: showBurgerMenu })}
      onClick={onLinkClick}
    >
      <NavLink to={RoutePath.Create} className={setClass}>
        {t(ContentTxtKey.CreatingLink)}
      </NavLink>
      <NavLink to={RoutePath.Gallery} className={setClass}>
        {t(ContentTxtKey.GalleryLink)}
      </NavLink>
      <NavLink to={RoutePath.Examples} className={setClass}>
        {t(ContentTxtKey.ExamplesLink)}
      </NavLink>
      <NavLink to={RoutePath.Info} className={setClass}>
        {t(ContentTxtKey.InfoLink)}
      </NavLink>
      <NavLink to={RoutePath.Contacts} className={setClass}>
        {t(ContentTxtKey.ContactsLink)}
      </NavLink>
    </nav>
  );
};
