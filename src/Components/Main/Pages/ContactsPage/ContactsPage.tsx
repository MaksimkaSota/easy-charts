import type { FC, ReactElement } from 'react';
import classes from './ContactsPage.module.scss';
import email from '../../../../assets/images/email.png';
import { RequestString } from '../../../../utils/types/enums';

export const ContactsPage: FC = (): ReactElement => {
  return (
    <div className={classes.contacts}>
      <div className={classes.imageContainer}>
        <img src={email} alt="Почта" />
      </div>
      <h2 className={classes.title}>Контакты</h2>
      <p className={classes.textContent}>По любым вопросам и предложениям пишите, пожалуйста, на почту:</p>
      <a className={classes.mail} href={RequestString.mail}>
        MaksimkaSota@gmail.com
      </a>
    </div>
  );
};
