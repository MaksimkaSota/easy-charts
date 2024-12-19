import { memo, type ReactElement } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import classes from './BasicSettingsForm.module.scss';
import { AddRowForm } from './AddRowForm/AddRowForm';
import { AddColumnForm } from './AddColumnForm/AddColumnForm';
import type { IChart } from '../../../../../utils/types/api/chart';
import { ValidationTxtKey } from '../../../../../utils/types/enums';
import type { ObjectType } from '../../../../../utils/types/common';

const validationSchema = (t: TFunction): ObjectType => {
  return Yup.object().shape({
    datasets: Yup.array().of(
      Yup.object().shape({
        data: Yup.array().of(
          Yup.object().shape({
            value: Yup.number().typeError(t(ValidationTxtKey.Number)),
          })
        ),
      })
    ),
  });
};

type PropsType = {
  options: IChart;
  setTitle: (type: string) => void;
  setLabels: (id: number, value: string) => void;
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  addRow: () => void;
  addColumn: () => void;
  removeRow: (index: number) => void;
  removeColumn: (index: number) => void;
};

export const BasicSettingsForm = memo<PropsType>(
  ({ options, setTitle, setLabels, setData, setLabelInDatasets, addRow, addColumn, removeRow, removeColumn }) => {
    const { t } = useTranslation();

    return (
      <Formik
        initialValues={{
          title: options.options.title.text,
          labels: options.data.labels,
          datasets: options.data.datasets,
        }}
        validationSchema={validationSchema(t)}
        onSubmit={() => {}}
      >
        {({ errors, values, handleChange, setValues, validateForm }): ReactElement => (
          <Form className={classes.basicSettingsForm}>
            <AddRowForm
              title={options.options.title.text}
              labelsFromValues={values.labels}
              labelsFromOptions={options.data.labels}
              datasets={options.data.datasets}
              setTitle={setTitle}
              setLabels={setLabels}
              addRow={addRow}
              removeRow={removeRow}
              errors={errors}
              handleChange={handleChange}
              setValues={setValues}
            />
            <AddColumnForm
              title={options.options.title.text}
              labels={options.data.labels}
              datasetsFromValues={values.datasets}
              datasetsFromOptions={options.data.datasets}
              setLabelInDatasets={setLabelInDatasets}
              setData={setData}
              addColumn={addColumn}
              removeColumn={removeColumn}
              setValues={setValues}
              validateForm={validateForm}
            />
          </Form>
        )}
      </Formik>
    );
  }
);
