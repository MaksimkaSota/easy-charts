import { type ReactElement, memo } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ViewChartForm } from './ViewAndSaveChartForm/ViewChartForm';

const validationSchema = Yup.object().shape({
  width: Yup.number()
    .min(500, 'Минимально 500')
    .max(3000, 'Максимально 3000')
    .required('Обязательно для ввода')
    .typeError('Только числа'),
  height: Yup.number()
    .min(300, 'Минимально 300')
    .max(3000, 'Максимально 3000')
    .required('Обязательно для ввода')
    .typeError('Только числа'),
});

type PropsType = {
  width: number | string;
  height: number | string;
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
};
type FormDataType = {
  width: number | string;
  height: number | string;
};

export const AdditionalSettingsForm = memo<PropsType>(({ width, height, setWidth, setHeight }): ReactElement => {
  const onSubmit = (formData: FormDataType): void => {
    setWidth(formData.width);
    setHeight(formData.height);
  };

  return (
    <Formik initialValues={{ width, height }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isValid, errors, setTouched }): ReactElement => (
        <ViewChartForm isValid={isValid} errors={errors} setTouched={setTouched} />
      )}
    </Formik>
  );
});
