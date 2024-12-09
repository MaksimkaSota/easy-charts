import { type ChangeEvent, type FC, type ReactElement, useEffect, useState } from 'react';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ViewAndSaveForm.module.scss';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../../redux/selectors/selectors';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import type {
  FormikErrorsType,
  SetTouchedType,
  SetValuesType,
  ValidateFormType,
} from '../../../../../../utils/types/form';
import {
  ChartType,
  FieldName,
  RoutePath,
  StandardOption,
  ContentTxtKey,
  LocalStorageKey,
} from '../../../../../../utils/types/enums';
import { getLocalItem } from '../../../../../../services/browserDataStorage/localStorage';
import type { IChart } from '../../../../../../utils/types/api/chart';

type PropsType = {
  options: IChart;
  width: number | string;
  height: number | string;
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
  resetMainOptions: (language: string) => void;
  setExamplesType: (type: string) => void;
  isValid: boolean;
  errors: FormikErrorsType;
  setTouched: SetTouchedType;
  setValues: SetValuesType<{ width: number | string; height: number | string }>;
  validateForm: ValidateFormType;
};

export const ViewAndSaveForm: FC<PropsType> = ({
  options,
  width,
  height,
  setWidth,
  setHeight,
  resetMainOptions,
  setExamplesType,
  isValid,
  errors,
  setTouched,
  setValues,
  validateForm,
}): ReactElement => {
  const { themeMode, languageMode } = useTypedSelector(viewSelector);

  const { t } = useTranslation();

  const [isIlluminatedButton, setIsIlluminatedButton] = useState(false);

  useEffect(() => {
    if (
      getLocalItem<IChart>(LocalStorageKey.MainOptions) ||
      getLocalItem<string>(LocalStorageKey.MainWidth) ||
      getLocalItem<string>(LocalStorageKey.MainHeight)
    ) {
      setIsIlluminatedButton(true);
    }
  }, [options, width, height]);

  useEffect(() => {}, []);

  useEffect(() => {
    validateForm();
  }, [validateForm, languageMode]);

  useEffect(() => {
    setTouched({ [FieldName.Width]: true, [FieldName.Height]: true });
  }, [setTouched]);

  useEffect(() => {
    setValues({ [FieldName.Width]: width, [FieldName.Height]: height });
  }, [setValues, height, width]);

  const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWidth(event.target.value);
  };

  const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setHeight(event.target.value);
  };

  const onResetButtonClick = (): void => {
    setWidth(StandardOption.Width);
    setHeight(StandardOption.Height);
    resetMainOptions(languageMode);
    setExamplesType(ChartType.Bar);

    setIsIlluminatedButton(false);
  };

  return (
    <Form>
      <FormFieldWithLabel
        formContainerClassName={classes.formContainer}
        labelClassName={cn(classes.label, classes[`label-${themeMode}`])}
        htmlFor={FieldName.Width}
        label="Ширина"
      >
        <FormField
          classNameField={cn(classes.inputData, classes[`inputData-${themeMode}`])}
          name={FieldName.Width}
          id={FieldName.Width}
          type="text"
          errors={errors}
          onChange={onWidthChange}
        />
      </FormFieldWithLabel>
      <FormFieldWithLabel
        formContainerClassName={classes.formContainer}
        labelClassName={cn(classes.label, classes[`label-${themeMode}`])}
        htmlFor={FieldName.Height}
        label="Высота"
      >
        <FormField
          classNameField={cn(classes.inputData, classes[`inputData-${themeMode}`])}
          name={FieldName.Height}
          id={FieldName.Height}
          type="text"
          errors={errors}
          onChange={onHeightChange}
        />
      </FormFieldWithLabel>
      <NavLink to={RoutePath.Save}>
        <button className={classes.button} type="submit" disabled={!isValid}>
          {t(ContentTxtKey.ViewAndSaveButton)}
        </button>
      </NavLink>
      <button
        className={cn(classes.button, { [classes.illuminatedButton]: isIlluminatedButton })}
        type="button"
        onClick={onResetButtonClick}
      >
        {t(ContentTxtKey.ResetButton)}
      </button>
    </Form>
  );
};
