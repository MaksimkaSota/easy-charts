import { memo, type ReactElement } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ViewChartForm } from './ViewAndSaveChartForm/ViewChartForm';

const validationSchema = () =>
  Yup.object().shape({
    width: Yup.number().min(500, 'Минимально 500').max(3000, 'Максимально 3000').typeError('Только числа'),
    height: Yup.number().min(300, 'Минимально 300').max(3000, 'Максимально 3000').typeError('Только числа'),
  });

type PropsType = {
  address: string;
  width: number | string;
  height: number | string;
  setWidth: (width: number | string) => void;
  setHeight: (height: number | string) => void;
};

export const AdditionalSettingsForm = memo<PropsType>(
  ({ address, width, height, setWidth, setHeight }): ReactElement => {
    return (
      <Formik initialValues={{ width, height }} validationSchema={validationSchema} onSubmit={() => {}}>
        {({ errors, handleChange, submitForm }): ReactElement => (
          <ViewChartForm
            address={address}
            setWidth={setWidth}
            setHeight={setHeight}
            errors={errors}
            handleChange={handleChange}
            submitForm={submitForm}
          />
        )}
      </Formik>
    );
  }
);
