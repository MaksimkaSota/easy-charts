import { type FC, type ReactElement, type ChangeEvent, useState, useEffect } from 'react';
import { Form } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import cn from 'classnames';
import classes from './CurrencyForm.module.scss';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FieldName } from '../../../../../../utils/types/enums';
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
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.BelarusCoin, 'Загрузка...');
      if (activeField && activeField !== FieldName.AmericaCoin) {
        setFieldValue(FieldName.AmericaCoin, 'Загрузка...');
      }
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.EuropeCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.RussiaCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.UkraineCoin, 'Загрузка...');
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.PolandCoin, 'Загрузка...');
    } else if (currencyError) {
      setFieldValue(FieldName.BelarusCoin, 'Нет данных');
      if (activeField && activeField !== FieldName.AmericaCoin) {
        setFieldValue(FieldName.AmericaCoin, '1');
      }
      setFieldValue(FieldName.EuropeCoin, 'Нет данных');
      setFieldValue(FieldName.RussiaCoin, 'Нет данных');
      setFieldValue(FieldName.UkraineCoin, 'Нет данных');
      setFieldValue(FieldName.PolandCoin, 'Нет данных');
    } else {
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.BelarusCoin, belarusCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.AmericaCoin, americaCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.EuropeCoin, europeCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.RussiaCoin, russiaCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.UkraineCoin, ukraineCoin);
      setFieldValueOnCondition(setFieldValue, activeField, FieldName.PolandCoin, polandCoin);
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
          htmlFor={FieldName.BelarusCoin}
          label={FieldName.BelarusCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.BelarusCoin}
            id={FieldName.BelarusCoin}
            type="text"
            disabled={
              (isFetchingCurrency && activeField !== FieldName.BelarusCoin) ||
              (Boolean(currencyError) && activeField !== FieldName.BelarusCoin)
            }
            onChange={onCoinChange(FieldName.BelarusCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Белорусский рубль</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FieldName.AmericaCoin}
          label={FieldName.AmericaCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.AmericaCoin}
            id={FieldName.AmericaCoin}
            type="text"
            disabled={isFetchingCurrency && activeField !== FieldName.AmericaCoin}
            onChange={onCoinChange(FieldName.AmericaCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>доллар США</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FieldName.EuropeCoin}
          label={FieldName.EuropeCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.EuropeCoin}
            id={FieldName.EuropeCoin}
            type="text"
            disabled={(isFetchingCurrency && activeField !== FieldName.EuropeCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FieldName.EuropeCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Евро</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FieldName.RussiaCoin}
          label={FieldName.RussiaCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.RussiaCoin}
            id={FieldName.RussiaCoin}
            type="text"
            disabled={(isFetchingCurrency && activeField !== FieldName.RussiaCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FieldName.RussiaCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Российский рубль</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FieldName.UkraineCoin}
          label={FieldName.UkraineCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.UkraineCoin}
            id={FieldName.UkraineCoin}
            type="text"
            disabled={(isFetchingCurrency && activeField !== FieldName.UkraineCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FieldName.UkraineCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Украинская гривна</p>
      </div>
      <div className={classes.container}>
        <FormFieldWithLabel
          formContainerClassName={classes.formContainer}
          labelClassName={classes.label}
          htmlFor={FieldName.PolandCoin}
          label={FieldName.PolandCoin}
        >
          <FormField
            classNameFormField={classes.formField}
            classNameField={classes.inputData}
            name={FieldName.PolandCoin}
            id={FieldName.PolandCoin}
            type="text"
            disabled={(isFetchingCurrency && activeField !== FieldName.PolandCoin) || Boolean(currencyError)}
            onChange={onCoinChange(FieldName.PolandCoin)}
            onKeyPress={onCoinPress}
          />
        </FormFieldWithLabel>
        <p className={classes.description}>Польский злотый</p>
      </div>
    </Form>
  );
};
