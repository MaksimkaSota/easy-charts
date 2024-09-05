import { type ReactElement, useEffect, memo } from 'react';
import classes from './AddColumnForm.module.scss';
import type { SetFieldValueType } from '../../../../../../utils/types/form';
import type { IDataset } from '../../../../../../utils/types/api';
import { ColumnForm } from '../ColumnForm/ColumnForm';

type PropsType = {
  datasets: IDataset[];
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  addColumn: () => void;
  removeColumn: (index: number) => void;
  setFieldValue: SetFieldValueType;
};

export const AddColumnForm = memo<PropsType>(
  ({ datasets, setLabelInDatasets, setData, addColumn, removeColumn, setFieldValue }): ReactElement => {
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
              />
            )
          )}
        </div>
        <button className={classes.addButton} type="button" onClick={() => addColumn()}>
          Добавить столбец
        </button>
      </div>
    );
  }
);
