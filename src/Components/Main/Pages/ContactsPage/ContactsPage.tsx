import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ContactsPage.module.scss';
import email from '../../../../assets/images/content/email.png';
import { requestString } from '../../../../services/api/endpoints';
import { AltTxtKey, ContentTxtKey } from '../../../../utils/types/enums';
import { PageDescription } from '../../../Common/PageDescription/PageDescription';

export const ContactsPage: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.contacts}>
      <img className={classes.email} src={email} alt={t(AltTxtKey.Mail)} />
      <PageDescription title={t(ContentTxtKey.ContactsTitle)} textContent={t(ContentTxtKey.ContactsDescription)} />
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
