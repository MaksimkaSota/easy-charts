import { type FC, type ReactElement, type ChangeEvent, useState, useEffect } from 'react';
import { Form } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import cn from 'classnames';
import classes from './CurrencyForm.module.scss';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FormName } from '../../../../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../../../../utils/types/common';
import type { SetFieldValueType } from '../../../../../../utils/types/form';
import { setFieldValueOnCondition } from '../../../../../../utils/helpers/componentsHelpers';

type PropsType = {
  isFetchingCurrency: boolean;
  belarusCoin: string;
  americaCoin: string;
  europeCoin: string;
  russiaCoin: string;
  ukraineCoin: string;
  polandCoin: string;
  currencyError: Nullable<ErrorType>;
  setCurrencyRequest: () => void;
  getCurrency: (coin: string, name: string) => void;
  setFieldValue: SetFieldValueType;
};

export const CurrencyForm: FC<PropsType> = ({
  isFetchingCurrency,
  belarusCoin,
  americaCoin,
  europeCoin,
  russiaCoin,
  ukraineCoin,
  polandCoin,
  currencyError,
  setCurrencyRequest,
  getCurrency,
  setFieldValue,
}): ReactElement => {
  const [activeField, setActiveField] = useState<string>('');

  useEffect(() => {
    if (isFetchingCurrency) {
      setFieldValueOnCondition(setFieldValue, activeField, FormName.BelarusCoin, 'Загрузка...');
      if (activeField && activeField !== FormName.AmericaCoin) {
        setFieldValue(FormName.AmericaCoin, 'Загрузка...');
      }
      setFieldValueOnCondition(setFieldValue, activeField, FormName.EuropeCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FormName.RussiaCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FormName.UkraineCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FormName.PolandCoin, 'Загрузка...');
    } else if (currencyError) {
      setFieldValue(FormName.BelarusCoin, 'Нет данных');
      if (activeField && activeField !== FormName.AmericaCoin) {
        setFieldValue(FormName.AmericaCoin, '1');
      }
      setFieldValue(FormName.EuropeCoin, 'Нет данных');
      setFieldValue(FormName.RussiaCoin, 'Нет данных');
      setFieldValue(FormName.UkraineCoin, 'Нет данных');
      setFieldValue(FormName.PolandCoin, 'Нет данных');
    } else {
      setFieldValueOnCondition(setFieldValue, activeField, FormName.BelarusCoin, belarusCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FormName.AmericaCoin, americaCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FormName.EuropeCoin, europeCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FormName.RussiaCoin, russiaCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FormName.UkraineCoin, ukraineCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FormName.PolandCoin, polandCoin);
    }
    // eslint-disable-next-line
  }, [isFetchingCurrency]);

  const getDebouncedCurrency = useDebouncedCallback((coin, name) => getCurrency(coin, name), 900);

  const onCoinChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setActiveField(name);
    setFieldValue(name, value.replace(/([^.]*\.[^.]*)\./g, '$1'));

    if (!value || value.lastIndexOf('.') !== value.length - 1) {
      setCurrencyRequest();
      getDebouncedCurrency(value.replace(/([^.]*\.[^.]*)\./g, '$1'), name);
    }
  };

  const onCoinPress = (event: KeyboardEvent): void => {
    if (!/[0-9.]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Form className={classes.currencyForm}>
      <h3 className={classes.miniTitle}>Конвертер валют</h3>
      <p className={cn(classes.hintText, { [classes.textError]: currencyError })}>
        {currencyError?.message || 'По курсу НБРБ'}
      </p>
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
            disabled={
              (isFetchingCurrency && activeField !== FormName.BelarusCoin) ||
              (Boolean(currencyError) && activeField !== FormName.BelarusCoin)
            }
            onChange={onCoinChange(FormName.BelarusCoin)}
            onKeyPress={onCoinPress}
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
            disabled={isFetchingCurrency && activeField !== FormName.AmericaCoin}
            onChange={onCoinChange(FormName.AmericaCoin)}
            onKeyPress={onCoinPress}
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
            disabled={(isFetchingCurrency && activeField !== FormName.EuropeCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FormName.EuropeCoin)}
            onKeyPress={onCoinPress}
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
            disabled={(isFetchingCurrency && activeField !== FormName.RussiaCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FormName.RussiaCoin)}
            onKeyPress={onCoinPress}
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
            disabled={(isFetchingCurrency && activeField !== FormName.UkraineCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FormName.UkraineCoin)}
            onKeyPress={onCoinPress}
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
            disabled={(isFetchingCurrency && activeField !== FormName.PolandCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FormName.PolandCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Польский злотый</p>
      </div>
    </Form>
  );
};
