import type { ReactElement, FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CurrencyForm } from './CurrencyForm';

const validationSchema = Yup.object().shape({
  BYN: Yup.number().typeError('Только числа'),
  USD: Yup.number().typeError('Только числа'),
  EUR: Yup.number().typeError('Только числа'),
  RUB: Yup.number().typeError('Только числа'),
  UAH: Yup.number().typeError('Только числа'),
  PLN: Yup.number().typeError('Только числа'),
});

type PropsType = {};

export const CurrencyFormContainer: FC<PropsType> = (): ReactElement => {
  return (
    <Formik
      initialValues={{ BYN: '', USD: '', EUR: '', RUB: '', UAH: '', PLN: '' }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(): ReactElement => <CurrencyForm />}
    </Formik>
  );
};
