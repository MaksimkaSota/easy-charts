import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import classes from './Navigation.module.scss';
import { mainInitialValue } from '../../../utils/initialValues/mainInitialValue';

export const Navigation: FC = (): ReactElement => {
  const {setNewMainOptions} = useActions();

  return (
    <nav className={classes.navigation}>
      <NavLink to="create" className={classes.link} onClick={() => setNewMainOptions(mainInitialValue)}>
        Создать
      </NavLink>
      <NavLink to="gallery" className={classes.link} onClick={() => setNewMainOptions(mainInitialValue)}>
        Галерея
      </NavLink>
      <NavLink to="examples" className={classes.link}>
        Примеры
      </NavLink>
      <NavLink to="contacts" className={classes.link}>
        Контакты
      </NavLink>
    </nav>
  );
};
