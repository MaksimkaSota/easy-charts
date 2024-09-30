import { type ReactElement, useEffect, memo } from 'react';
import classes from './AddColumnForm.module.scss';
import type { SetFieldValueType } from '../../../../../../utils/types/form';
import type { IDataset } from '../../../../../../utils/types/api';
import { ColumnForm } from '../ColumnForm/ColumnForm';

type PropsType = {
  datasetsFromValues: IDataset[];
  datasetsFromOptions: IDataset[];
  labels: string[];
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  addColumn: () => void;
  removeColumn: (index: number) => void;
  setFieldValue: SetFieldValueType;
};

export const AddColumnForm = memo<PropsType>(
  ({
    datasetsFromValues,
    datasetsFromOptions,
    labels,
    setLabelInDatasets,
    setData,
    addColumn,
    removeColumn,
    setFieldValue,
  }): ReactElement => {
    useEffect(() => {
      setFieldValue('labels', labels);
      setFieldValue('datasets', datasetsFromOptions);
      // eslint-disable-next-line
    }, [datasetsFromOptions]);

    return (
      <div className={classes.formContainer}>
        <div className={classes.formContainerInner}>
          {datasetsFromValues.map(
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
