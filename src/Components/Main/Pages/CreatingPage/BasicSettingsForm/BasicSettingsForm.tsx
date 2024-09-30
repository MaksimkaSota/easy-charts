import { type ReactElement, memo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import classes from './BasicSettingsForm.module.scss';
import type { IChart } from '../../../../../utils/types/api';
import { AddRowForm } from './AddRowForm/AddRowForm';
import { AddColumnForm } from './AddColumnForm/AddColumnForm';

const validationSchema = Yup.object().shape({
  datasets: Yup.array().of(
    Yup.object().shape({
      data: Yup.array().of(Yup.number().typeError('Только числа')),
    })
  ),
});

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
    return (
      <Formik
        initialValues={{
          title: options.options.title.text,
          labels: options.data.labels,
          datasets: options.data.datasets,
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ errors, handleChange, values, setFieldValue }): ReactElement => (
          <Form className={classes.basicSettingsForm}>
            <AddRowForm
              labelsFromValues={values.labels}
              labelsFromOptions={options.data.labels}
              datasets={options.data.datasets}
              setLabels={setLabels}
              setTitle={setTitle}
              addRow={addRow}
              removeRow={removeRow}
              errors={errors}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
            <AddColumnForm
              datasetsFromValues={values.datasets}
              datasetsFromOptions={options.data.datasets}
              labels={options.data.labels}
              setData={setData}
              setLabelInDatasets={setLabelInDatasets}
              addColumn={addColumn}
              removeColumn={removeColumn}
              setFieldValue={setFieldValue}
            />
          </Form>
        )}
      </Formik>
    );
  }
);
