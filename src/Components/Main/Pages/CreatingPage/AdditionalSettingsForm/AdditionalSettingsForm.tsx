import { type ReactElement, memo } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ViewAndSaveForm } from './ViewAndSaveForm/ViewAndSaveForm';
import type { IChart } from '../../../../../utils/types/api/chart';

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
  setMainOptionsWithId: (mainOptions: IChart) => void;
  setExamplesType: (type: string) => void;
};

export const AdditionalSettingsForm = memo<PropsType>(
  ({ width, height, setWidth, setHeight, setMainOptionsWithId, setExamplesType }): ReactElement => {
    return (
      <Formik initialValues={{ width, height }} validationSchema={validationSchema} onSubmit={() => {}}>
        {({ isValid, errors, setTouched, setValues }): ReactElement => (
          <ViewAndSaveForm
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
            setMainOptionsWithId={setMainOptionsWithId}
            setExamplesType={setExamplesType}
            isValid={isValid}
            errors={errors}
            setValues={setValues}
            setTouched={setTouched}
          />
        )}
      </Formik>
    );
  }
);
