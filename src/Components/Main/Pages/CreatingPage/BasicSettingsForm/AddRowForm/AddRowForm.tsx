import { type ChangeEvent, type ReactElement, useEffect, memo } from 'react';
import classes from './AddRowForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { RowForm } from '../RowForm/RowForm';
import type { FormikErrorsType, HandleChangeType, SetFieldValueType } from '../../../../../../utils/types/form';
import type { IData, IDataset } from '../../../../../../utils/types/api';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {
  labelsFromValues: IData[];
  labelsFromOptions: IData[];
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
      setFieldValue(FormName.Labels, labelsFromOptions);
      setFieldValue(FormName.Datasets, datasets);
      // eslint-disable-next-line
    }, [setFieldValue, labelsFromOptions]);

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      handleChange(event);
      setTitle(event.target.value);
    };

    return (
      <div className={classes.formContainer}>
        <p className={classes.axisName}>X</p>
        <FormField
          classNameField={classes.inputData}
          name={FormName.Title}
          type="text"
          onChange={onTitleChange}
          errors={errors}
        />
        {labelsFromValues.map(
          (label: IData, labelIndex: number, labels: IData[]): ReactElement => (
            <RowForm
              key={label.id}
              labelIndex={labelIndex}
              labelsLength={labels.length}
              setLabels={setLabels}
              removeRow={removeRow}
              errors={errors}
            />
          )
        )}
        <button className={classes.addButton} type="button" onClick={addRow}>
          Добавить строку
        </button>
      </div>
    );
  }
);
