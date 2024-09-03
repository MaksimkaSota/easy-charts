import { type ReactElement, memo } from 'react';
import { useEffect } from 'react';
import classes from './AddColumnForm.module.scss';
import type { FormikErrorsType, HandleChangeType, SetFieldValueType } from '../../../../../../utils/types/form';
import type { IDataset } from '../../../../../../utils/types/api';
import { ColumnForm } from '../ColumnForm/ColumnForm';

type PropsType = {
  datasets: IDataset[];
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  addColumn: () => void;
  removeColumn: (index: number) => void;
  errors: FormikErrorsType;
  handleChange: HandleChangeType;
  setFieldValue: SetFieldValueType;
};

export const AddColumnForm = memo<PropsType>(
  ({
    datasets,
    setLabelInDatasets,
    setData,
    addColumn,
    removeColumn,
    errors,
    handleChange,
    setFieldValue,
  }): ReactElement => {
    useEffect(() => {
      setFieldValue('datasets', datasets);
      // eslint-disable-next-line
    }, [datasets]);

    return (
      <div className={classes.formContainer}>
        <div className={classes.formContainerInner}>
          {datasets.map(
            (dataset: IDataset, datasetIndex: number): ReactElement => (
              <ColumnForm
                key={datasetIndex}
                dataset={dataset}
                datasetIndex={datasetIndex}
                setData={setData}
                setLabelInDatasets={setLabelInDatasets}
                removeColumn={removeColumn}
                errors={errors}
                handleChange={handleChange}
              />
            )
          )}
        </div>
        <button className={classes.addButton} onClick={() => addColumn()}>
          Добавить столбец
        </button>
      </div>
    );
  }
);
