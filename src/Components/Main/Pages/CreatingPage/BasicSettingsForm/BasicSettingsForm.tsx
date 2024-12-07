import { type ReactElement, memo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import classes from './BasicSettingsForm.module.scss';
import { AddRowForm } from './AddRowForm/AddRowForm';
import { AddColumnForm } from './AddColumnForm/AddColumnForm';
import type { IChart } from '../../../../../utils/types/api/chart';

const validationSchema = Yup.object().shape({
  datasets: Yup.array().of(
    Yup.object().shape({
      data: Yup.array().of(
        Yup.object().shape({
          value: Yup.number().typeError('Только числа'),
        })
      ),
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
        {({ errors, values, handleChange, setValues }): ReactElement => (
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
            />
          </Form>
        )}
      </Formik>
    );
  }
);
