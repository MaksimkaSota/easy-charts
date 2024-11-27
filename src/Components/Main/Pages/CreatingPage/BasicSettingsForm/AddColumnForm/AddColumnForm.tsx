import { type ReactElement, useEffect, memo } from 'react';
import classes from './AddColumnForm.module.scss';
import type { SetValuesType } from '../../../../../../utils/types/form';
import type { IData, IDataset } from '../../../../../../utils/types/api/chart';
import { ColumnForm } from '../ColumnForm/ColumnForm';
import { FieldName } from '../../../../../../utils/types/enums';

type PropsType = {
  title: string;
  labels: IData[];
  datasetsFromValues: IDataset[];
  datasetsFromOptions: IDataset[];
  setLabelInDatasets: (id: number, value: string) => void;
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  addColumn: () => void;
  removeColumn: (index: number) => void;
  setValues: SetValuesType<{
    title: string;
    labels: IData[];
    datasets: IDataset[];
  }>;
};

export const AddColumnForm = memo<PropsType>(
  ({
    title,
    labels,
    datasetsFromValues,
    datasetsFromOptions,
    setLabelInDatasets,
    setData,
    addColumn,
    removeColumn,
    setValues,
  }): ReactElement => {
    useEffect(() => {
      setValues({ [FieldName.Title]: title, [FieldName.Labels]: labels, [FieldName.Datasets]: datasetsFromOptions });
      // eslint-disable-next-line
    }, [setValues, datasetsFromOptions]);

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
