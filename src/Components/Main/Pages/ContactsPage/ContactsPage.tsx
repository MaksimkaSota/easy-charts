import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './ContactsPage.module.scss';
import email from '../../../../assets/images/content/email.png';
import { requestString } from '../../../../services/api/endpoints';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';

export const ContactsPage: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.contacts}>
      <img className={classes.email} src={email} alt="Почта" />
      <h2 className={cn(classes.title, classes[`title-${themeMode}`])}>Контакты:</h2>
      <p className={classes.textContent}>
        По любым вопросам и предложениям пишите, пожалуйста, на почту или в другие источники:
      </p>
      <a className={classes.link} href={requestString.contacts.mail}>
        MaksimkaSota@gmail.com
      </a>
      <a className={classes.link} href={requestString.contacts.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a className={classes.link} href={requestString.contacts.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
};
