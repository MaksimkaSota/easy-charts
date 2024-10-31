import { type ChangeEvent, type ReactElement, memo, useEffect } from 'react';
import { useFormikContext } from 'formik';
import cn from 'classnames';
import classes from './ColumnForm.module.scss';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import type { IData, IDataset } from '../../../../../../utils/types/api';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {
  dataset: IDataset;
  datasetIndex: number;
  datasetsLength: number;
  setData: ({ datasetId, dataId, value }: { datasetId: number; dataId: number; value: string }) => void;
  setLabelInDatasets: (id: number, value: string) => void;
  removeColumn: (index: number) => void;
};

export const ColumnForm = memo<PropsType>(
  ({ dataset, datasetIndex, datasetsLength, setData, setLabelInDatasets, removeColumn }): ReactElement => {
    const { errors, setFieldTouched } = useFormikContext();

    useEffect(() => {
      dataset.data.forEach((dataItem, dataItemIndex: number): void => {
        setFieldTouched(`${FormName.Datasets}.${datasetIndex}.data.${dataItemIndex}.value`, true);
      });
      // eslint-disable-next-line
    }, [setFieldTouched]);

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
        <button
          type="button"
          aria-label="Remove column"
          title={datasetsLength !== 1 ? 'Удалить этот столбец' : undefined}
          className={cn(classes.closeY, { [classes.closeYHover]: datasetsLength !== 1 })}
          onClick={() => removeColumn(datasetIndex)}
          disabled={datasetsLength === 1}
        >
          X
        </button>
        <FormField
          classNameField={classes.inputData}
          name={`${FormName.Datasets}.${datasetIndex}.label`}
          errors={errors}
          onChange={onLabelInDatasetsChange}
        />
        {dataset.data.map(
          (dataItem: IData, dataItemIndex: number): ReactElement => (
            <FormField
              key={dataItem.id}
              classNameField={classes.inputDataNumbers}
              name={`${FormName.Datasets}.${datasetIndex}.data.${dataItemIndex}.value`}
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
