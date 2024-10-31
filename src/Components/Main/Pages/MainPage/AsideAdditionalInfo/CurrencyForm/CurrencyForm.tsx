import type { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './CurrencyForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {};

export const CurrencyForm: FC<PropsType> = (): ReactElement => {
  return (
    <Form className={classes.currencyForm}>
      <h3 className={classes.miniTitle}>Конвертер валют</h3>
      <p className={classes.hintText}>По курсу НБРБ</p>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.BelarusCoin}
          label={FormName.BelarusCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.BelarusCoin}
            id={FormName.BelarusCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Белорусский рубль</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.AmericaCoin}
          label={FormName.AmericaCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.AmericaCoin}
            id={FormName.AmericaCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>доллар США</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.EuropeCoin}
          label={FormName.EuropeCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.EuropeCoin}
            id={FormName.EuropeCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Евро</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.RussiaCoin}
          label={FormName.RussiaCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.RussiaCoin}
            id={FormName.RussiaCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Российский рубль</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.UkraineCoin}
          label={FormName.UkraineCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.UkraineCoin}
            id={FormName.UkraineCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Украинская гривна</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FormName.PolandCoin}
          label={FormName.PolandCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FormName.PolandCoin}
            id={FormName.PolandCoin}
            type="text"
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Украинская гривна</p>
      </div>
    </Form>
  );
};
