import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ContactsPage.module.scss';
import email from '../../../../assets/images/content/email.png';
import { requestString } from '../../../../services/api/endpoints';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';
import { AltTxtKey } from '../../../../utils/types/enums';

export const ContactsPage: FC = (): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  return (
    <div className={classes.contacts}>
      <img className={classes.email} src={email} alt={t(AltTxtKey.Mail)} />
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
