import { type ChangeEvent, type FC, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import classes from './ViewAndSaveForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { FormFieldWithLabel } from '../../../../../Common/FormFields/FormFieldWithLabel/FormFieldWithLabel';
import type { FormikErrorsType, HandleChangeType, SetTouchedType } from '../../../../../../utils/types/form';
import { ChartType, FieldName, RoutePath } from '../../../../../../utils/types/enums';
import type { IChart } from '../../../../../../utils/types/api/chart';
import { mainInitialValue } from '../../../../../../utils/initialValues/mainInitialValue';

type PropsType = {
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
  isValid: boolean;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  setTouched: SetTouchedType;
  setMainOptionsWithId: (mainOptions: IChart) => void;
  setExamplesType: (type: string) => void;
};

export const ViewAndSaveForm: FC<PropsType> = ({
  setWidth,
  setHeight,
  isValid,
  errors,
  handleChange,
  setTouched,
  setMainOptionsWithId,
  setExamplesType,
}): ReactElement => {
  useEffect(() => {
    setTouched({ width: true, height: true });
  }, [setTouched]);

  const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChange(event);
    setWidth(event.target.value);
  };

  const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChange(event);
    setHeight(event.target.value);
  };

  const onResetButtonClick = (): void => {
    setMainOptionsWithId(mainInitialValue);
    setExamplesType(ChartType.Bar);
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
