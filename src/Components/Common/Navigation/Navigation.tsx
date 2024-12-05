import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { RoutePath, ContentTxtKey } from '../../../utils/types/enums';

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();

  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  return (
    <nav className={classes.navigation}>
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
