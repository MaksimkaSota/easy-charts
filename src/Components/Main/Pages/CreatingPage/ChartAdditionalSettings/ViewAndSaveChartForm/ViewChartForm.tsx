import type { ChangeEvent, FC, ReactElement } from 'react';
import classes from './ViewChartForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import type { FormikErrorsType, HandleChangeType, SubmitFormType } from '../../../../../../utils/types/form';

type PropsType = {
  address: string;
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  submitForm: SubmitFormType;
};

export const ViewChartForm: FC<PropsType> = ({
  address,
  setWidth,
  setHeight,
  errors,
  handleChange,
  submitForm,
}): ReactElement => {
  const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    submitForm();
    handleChange(event);
    setWidth(event.target.value);
  };
  const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
    submitForm();
    handleChange(event);
    setHeight(event.target.value);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor="width">
          Ширина:
        </label>
        <FormField
          classNameField={classes.inputData}
          name="width"
          type="text"
          id="width"
          onChange={onWidthChange}
          errors={errors}
        />
      </div>
      <div className={classes.formContainer}>
        <label className={classes.label} htmlFor="height">
          Высота:
        </label>
        <FormField
          classNameField={classes.inputData}
          name="height"
          type="text"
          id="height"
          onChange={onHeightChange}
          errors={errors}
        />
      </div>
      <a className={classes.link} href={address} download>
        Сохранить график
      </a>
    </>
  );
};
