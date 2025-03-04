import type { Dispatch, FC, KeyboardEvent, MouseEvent, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import { ContentTxtKey, EventType, KeyboardEventCode, RoutePath } from '../../../utils/types/enums';

type PropsType = {
  className: string;
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<PropsType> = ({ className, showBurgerMenu, setShowBurgerMenu }): ReactElement => {
  const { t } = useTranslation();

  const setClass = ({ isActive }: { isActive: boolean }): string =>
    cn(classes.link, { [classes.activeLink]: isActive });

  const handleInteraction = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void => {
    if (
      (event.type === EventType.Click && (event.target as HTMLAnchorElement).className === classes.link) ||
      (event.type === EventType.Keydown && (event as KeyboardEvent).code === KeyboardEventCode.Enter)
    ) {
      setShowBurgerMenu((prevActualState: boolean): boolean => !prevActualState);
    }

    if (event.type === EventType.Click && (event.target as HTMLAnchorElement).className === classes.link) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={cn(classes.navigation, className, { [classes.shownNavigation]: showBurgerMenu })}>
      <div
        className={classes.navigationContainer}
        role="button"
        tabIndex={0}
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
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
      </div>
    </nav>
  );
};
