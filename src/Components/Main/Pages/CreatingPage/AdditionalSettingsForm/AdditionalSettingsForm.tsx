import { type ReactElement, memo } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { ViewAndSaveForm } from './ViewAndSaveForm/ViewAndSaveForm';
import type { IChart } from '../../../../../utils/types/api/chart';
import { ValidationTxtKey } from '../../../../../utils/types/enums';
import type { ObjectType } from '../../../../../utils/types/common';

const validationSchema = (t: TFunction): ObjectType => {
  return Yup.object().shape({
    width: Yup.number()
      .min(500, t(ValidationTxtKey.Min, { number: 500 }))
      .max(3000, t(ValidationTxtKey.Max, { number: 3000 }))
      .required(t(ValidationTxtKey.Required))
      .typeError(t(ValidationTxtKey.Number)),
    height: Yup.number()
      .min(300, t(ValidationTxtKey.Min, { number: 300 }))
      .max(3000, t(ValidationTxtKey.Max, { number: 3000 }))
      .required(t(ValidationTxtKey.Required))
      .typeError(t(ValidationTxtKey.Number)),
  });
};

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
    const { t } = useTranslation();

    return (
      <Formik initialValues={{ width, height }} validationSchema={validationSchema(t)} onSubmit={() => {}}>
        {({ isValid, errors, setTouched, setValues, validateForm }): ReactElement => (
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
            validateForm={validateForm}
          />
        )}
      </Formik>
    );
  }
);
