import { type ReactElement, useEffect, memo } from 'react';
import classes from './AddColumnForm.module.scss';
import type { SetFieldValueType } from '../../../../../../utils/types/form';
import type { IData, IDataset } from '../../../../../../utils/types/api/chart';
import { ColumnForm } from '../ColumnForm/ColumnForm';
import { FieldName } from '../../../../../../utils/types/enums';

type PropsType = {
  datasetsFromValues: IDataset[];
  datasetsFromOptions: IDataset[];
  title: string;
  labels: IData[];
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
    title,
    labels,
    setLabelInDatasets,
    setData,
    addColumn,
    removeColumn,
    setFieldValue,
  }): ReactElement => {
    useEffect(() => {
      setFieldValue(FieldName.Datasets, datasetsFromOptions);
      setFieldValue(FieldName.Title, title);
      setFieldValue(FieldName.Labels, labels);
      // eslint-disable-next-line
    }, [setFieldValue, datasetsFromOptions]);

    return (
      <div className={classes.formContainer}>
        <div className={classes.formContainerInner}>
          {datasetsFromValues.map(
            (dataset: IDataset, datasetIndex: number, datasets: IDataset[]): ReactElement => (
              <ColumnForm
                key={dataset.id}
                dataset={dataset}
                datasetIndex={datasetIndex}
                datasetsLength={datasets.length}
                setData={setData}
                setLabelInDatasets={setLabelInDatasets}
                removeColumn={removeColumn}
              />
            )
          )}
        </div>
        <button className={classes.addButton} type="button" onClick={addColumn}>
          Добавить столбец
        </button>
      </div>
    );
  }
);
