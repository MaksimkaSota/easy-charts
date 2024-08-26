import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import classes from './Navigation.module.scss';
import { mainInitialValue } from '../../utils/initialValues/mainInitialValue';

const Navigation = () => {
  const {getNewOptions} = useActions();

  return (
    <nav className={classes.navigation}>
      <Link to="create" className={classes.link} onClick={() => getNewOptions(mainInitialValue)}>
        Создать
      </Link>
      <Link to="gallery" className={classes.link} onClick={() => getNewOptions(mainInitialValue)}>
        Галерея
      </Link>
      <Link to="examples" className={classes.link}>
        Примеры
      </Link>
      <Link to="contacts" className={classes.link}>
        Контакты
      </Link>
    </nav>
  );
};

export default Navigation;
