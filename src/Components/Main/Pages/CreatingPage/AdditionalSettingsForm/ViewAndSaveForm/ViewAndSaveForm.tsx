import { type ChangeEvent, type FC, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';
import classes from './ViewAndSaveForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import type { FormikErrorsType, HandleChangeType, SetTouchedType } from '../../../../../../utils/types/form';
import { ChartType, FormName, RoutePath } from '../../../../../../utils/types/enums';
import type { IChart } from '../../../../../../utils/types/api';
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
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor={FormName.Width}>
          Ширина:
        </label>
        <FormField
          classNameField={classes.inputData}
          name={FormName.Width}
          type="text"
          id={FormName.Width}
          errors={errors}
          onChange={onWidthChange}
        />
      </div>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor={FormName.Height}>
          Высота:
        </label>
        <FormField
          classNameField={classes.inputData}
          name={FormName.Height}
          type="text"
          id={FormName.Height}
          errors={errors}
          onChange={onHeightChange}
        />
      </div>
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
