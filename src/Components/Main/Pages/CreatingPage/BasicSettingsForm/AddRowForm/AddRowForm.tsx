import { type ChangeEvent, memo, type ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './AddRowForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { RowForm } from '../RowForm/RowForm';
import type { FormikErrorsType, HandleChangeType, SetValuesType } from '../../../../../../utils/types/form';
import type { IData, IDataset } from '../../../../../../utils/types/api/chart';
import { ContentTxtKey, FieldName } from '../../../../../../utils/types/enums';

type PropsType = {
  title: string;
  labelsFromValues: IData[];
  labelsFromOptions: IData[];
  datasets: IDataset[];
  setTitle: (type: string) => void;
  setLabels: (id: number, value: string) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  setValues: SetValuesType<{
    title: string;
    labels: IData[];
    datasets: IDataset[];
  }>;
};

export const AddRowForm = memo<PropsType>(
  ({
    title,
    labelsFromValues,
    labelsFromOptions,
    datasets,
    setTitle,
    setLabels,
    addRow,
    removeRow,
    errors,
    handleChange,
    setValues,
  }): ReactElement => {
    const { t } = useTranslation();

    useEffect(() => {
      setValues({ [FieldName.Title]: title, [FieldName.Labels]: labelsFromOptions, [FieldName.Datasets]: datasets });
      // eslint-disable-next-line
    }, [setValues, labelsFromOptions]);

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      handleChange(event);
      setTitle(event.target.value);
    };

    return (
      <div className={classes.formContainer}>
        <p className={classes.axisName}>X</p>
        <FormField
          classNameField={classes.inputData}
          name={FieldName.Title}
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
          {t(ContentTxtKey.AddRowButton)}
        </button>
      </div>
    );
  }
);
