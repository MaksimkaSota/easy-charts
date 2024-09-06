import { type ChangeEvent, type ReactElement, memo } from 'react';
import classes from './AddRowForm.module.scss';
import type { FormikErrorsType, HandleChangeType } from '../../../../../../utils/types/form';
import { FormField } from '../../../../../Common/FormField/FormField';
import { RowForm } from '../RowForm/RowForm';

type PropsType = {
  labels: string[];
  setLabels: (id: number, value: string) => void;
  setTitle: (type: string) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
};

export const AddRowForm = memo<PropsType>(
  ({ labels, setLabels, setTitle, addRow, removeRow, errors, handleChange }): ReactElement => {
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
        {labels.map(
          (label: string, labelIndex: number): ReactElement => (
            <RowForm
              key={labelIndex}
              labelIndex={labelIndex}
              setLabels={setLabels}
              removeRow={removeRow}
              errors={errors}
              handleChange={handleChange}
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
