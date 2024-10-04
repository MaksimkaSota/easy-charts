import { type ChangeEvent, type FC, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import classes from './ViewAndSaveForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import type { FormikErrorsType, HandleChangeType, SetTouchedType } from '../../../../../../utils/types/form';
import { FormName, RoutePath } from '../../../../../../utils/types/enums';

type PropsType = {
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
  isValid: boolean;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  setTouched: SetTouchedType;
};

export const ViewAndSaveForm: FC<PropsType> = ({
  setWidth,
  setHeight,
  isValid,
  errors,
  handleChange,
  setTouched,
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

  return (
    <Form>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor={FormName.width}>
          Ширина:
        </label>
        <FormField
          classNameField={classes.inputData}
          name={FormName.width}
          type="text"
          id={FormName.width}
          errors={errors}
          onChange={onWidthChange}
        />
      </div>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor={FormName.height}>
          Высота:
        </label>
        <FormField
          classNameField={classes.inputData}
          name={FormName.height}
          type="text"
          id={FormName.height}
          errors={errors}
          onChange={onHeightChange}
        />
      </div>
      <NavLink to={RoutePath.save}>
        <button className={classes.submitButton} type="submit" disabled={!isValid}>
          Посмотреть и скачать график
        </button>
      </NavLink>
    </Form>
  );
};
