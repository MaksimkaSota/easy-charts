import { type FC, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import classes from './ViewChartForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import type { FormikErrorsType, SetTouchedType } from '../../../../../../utils/types/form';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {
  isValid: boolean;
  errors: FormikErrorsType;
  setTouched: SetTouchedType;
};

export const ViewChartForm: FC<PropsType> = ({ isValid, errors, setTouched }): ReactElement => {
  useEffect(() => {
    setTouched({ width: true, height: true });
    // eslint-disable-next-line
  }, []);

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
        />
      </div>
      <button className={classes.submitButton} type="submit" disabled={!isValid}>
        Посмотреть график
      </button>
    </Form>
  );
};
