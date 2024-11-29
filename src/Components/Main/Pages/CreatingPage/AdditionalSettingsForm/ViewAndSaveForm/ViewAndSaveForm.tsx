import { type ChangeEvent, type FC, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import classes from './ViewAndSaveForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import type { FormikErrorsType, SetTouchedType, SetValuesType } from '../../../../../../utils/types/form';
import { ChartType, FieldName, RoutePath, StandardOption } from '../../../../../../utils/types/enums';
import type { IChart } from '../../../../../../utils/types/api/chart';
import { mainInitialValue } from '../../../../../../utils/initialValues/mainInitialValue';

type PropsType = {
  width: number | string;
  height: number | string;
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
  setMainOptionsWithId: (mainOptions: IChart) => void;
  setExamplesType: (type: string) => void;
  isValid: boolean;
  errors: FormikErrorsType;
  setTouched: SetTouchedType;
  setValues: SetValuesType<{ width: number | string; height: number | string }>;
};

export const ViewAndSaveForm: FC<PropsType> = ({
  width,
  height,
  setWidth,
  setHeight,
  setMainOptionsWithId,
  setExamplesType,
  isValid,
  errors,
  setTouched,
  setValues,
}): ReactElement => {
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
    setMainOptionsWithId(mainInitialValue);
    setExamplesType(ChartType.Bar);
    setWidth(StandardOption.Width);
    setHeight(StandardOption.Height);
  };

  return (
    <Form>
      <FormFieldWithLabel
        formContainerClassName={classes.formContainer}
        labelClassName={classes.label}
        htmlFor={FieldName.Width}
        label="Ширина"
      >
        <FormField
          classNameField={classes.inputData}
          name={FieldName.Width}
          id={FieldName.Width}
          type="text"
          errors={errors}
          onChange={onWidthChange}
        />
      </FormFieldWithLabel>
      <FormFieldWithLabel
        formContainerClassName={classes.formContainer}
        labelClassName={classes.label}
        htmlFor={FieldName.Height}
        label="Высота"
      >
        <FormField
          classNameField={classes.inputData}
          name={FieldName.Height}
          id={FieldName.Height}
          type="text"
          errors={errors}
          onChange={onHeightChange}
        />
      </FormFieldWithLabel>
      <NavLink to={RoutePath.Save}>
        <button className={classes.button} type="submit" disabled={!isValid}>
          Посмотреть и сохранить график
        </button>
      </NavLink>
      <button className={classes.button} type="button" onClick={onResetButtonClick}>
        Сбросить график
      </button>
    </Form>
  );
};
