import type { FC, ReactElement } from 'react';
import classes from './ContactsPage.module.scss';
import email from '../../../../assets/images/content/email.png';
import { requestString } from '../../../../services/endpoints';

export const ContactsPage: FC = (): ReactElement => {
  return (
    <div className={classes.contacts}>
      <img className={classes.email} src={email} alt="Почта" />
      <h2 className={classes.title}>Контакты</h2>
      <p className={classes.textContent}>По любым вопросам и предложениям пишите, пожалуйста, на почту:</p>
      <a className={classes.mail} href={requestString.mail}>
        MaksimkaSota@gmail.com
      </a>
    </div>
  );
};
