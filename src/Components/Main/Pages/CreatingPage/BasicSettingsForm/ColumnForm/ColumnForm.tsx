import { type ChangeEvent, type ReactElement, memo, useEffect } from 'react';
import { useFormikContext } from 'formik';
import classes from './ColumnForm.module.scss';
import { FormField } from '../../../../../Common/FormField/FormField';
import type { IDataset } from '../../../../../../utils/types/api';

type PropsType = {
  dataset: IDataset;
  datasetIndex: number;
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  removeColumn: (index: number) => void;
};

export const ColumnForm = memo<PropsType>(
  ({ dataset, datasetIndex, setData, setLabelInDatasets, removeColumn }): ReactElement => {
    const { errors, setFieldTouched } = useFormikContext();

    useEffect(() => {
      dataset.data.forEach((dataItem, dataItemIndex: number): void => {
        setFieldTouched(`datasets.${datasetIndex}.data.${dataItemIndex}`, true);
      });
      // eslint-disable-next-line
    }, []);

    const onLabelInDatasetsChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setLabelInDatasets(datasetIndex, event.target.value);
    };

    const onDataChange = (dataItemIndex: number, event: ChangeEvent<HTMLInputElement>): void => {
      setData({
        datasetId: datasetIndex,
        dataId: dataItemIndex,
        value: event.target.value,
      });
    };

    return (
      <div className={classes.deleteColumnContainer}>
        <p className={classes.axis}>Y{datasetIndex + 1}</p>
        {/* eslint-disable-next-line */}
        <div title="Удалить этот столбец" className={classes.closeY} onClick={() => removeColumn(datasetIndex)} />
        <FormField
          classNameField={classes.inputData}
          name={`datasets.${datasetIndex}.label`}
          errors={errors}
          onChange={onLabelInDatasetsChange}
        />
        {dataset.data.map(
          (dataItem, dataItemIndex: number): ReactElement => (
            <FormField
              key={dataItemIndex}
              classNameField={classes.inputDataNumbers}
              name={`datasets.${datasetIndex}.data.${dataItemIndex}`}
              type="text"
              errors={errors}
              onChange={(event: ChangeEvent<HTMLInputElement>) => onDataChange(dataItemIndex, event)}
            />
          )
        )}
      </div>
    );
  }
);
