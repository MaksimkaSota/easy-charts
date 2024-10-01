import { type ChangeEvent, type ReactElement, useEffect, memo } from 'react';
import classes from './AddRowForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import { RowForm } from '../RowForm/RowForm';
import type { FormikErrorsType, HandleChangeType, SetFieldValueType } from '../../../../../../utils/types/form';
import type { IDataset } from '../../../../../../utils/types/api';

type PropsType = {
  labelsFromValues: string[];
  labelsFromOptions: string[];
  datasets: IDataset[];
  setLabels: (id: number, value: string) => void;
  setTitle: (type: string) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  setFieldValue: SetFieldValueType;
};

export const AddRowForm = memo<PropsType>(
  ({
    labelsFromValues,
    labelsFromOptions,
    datasets,
    setLabels,
    setTitle,
    addRow,
    removeRow,
    errors,
    handleChange,
    setFieldValue,
  }): ReactElement => {
    useEffect(() => {
      setFieldValue('labels', labelsFromOptions);
      setFieldValue('datasets', datasets);
      // eslint-disable-next-line
    }, [labelsFromOptions]);

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      handleChange(event);
      setTitle(event.target.value);
    };

    return (
      <div className={classes.formContainer}>
        <p className={classes.axisName}>X</p>
        <FormField
          classNameField={classes.inputData}
          name="title"
          type="text"
          onChange={onTitleChange}
          errors={errors}
        />
        {labelsFromValues.map(
          (label: string, labelIndex: number): ReactElement => (
            <RowForm
              key={labelIndex}
              labelIndex={labelIndex}
              setLabels={setLabels}
              removeRow={removeRow}
              errors={errors}
            />
          )
        )}
        <button className={classes.addButton} type="button" onClick={() => addRow()}>
          Добавить строку
        </button>
      </div>
    );
  }
);
