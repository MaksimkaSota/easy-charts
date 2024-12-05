import { type ReactElement, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../../redux/selectors/selectors';
import classes from './AddColumnForm.module.scss';
import { FieldName, ContentTxtKey } from '../../../../../../utils/types/enums';
import type { SetValuesType, ValidateFormType } from '../../../../../../utils/types/form';
import type { IData, IDataset } from '../../../../../../utils/types/api/chart';
import { ColumnForm } from '../ColumnForm/ColumnForm';

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
  validateForm: ValidateFormType;
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
    validateForm,
  }): ReactElement => {
    const { languageMode } = useTypedSelector(viewSelector);

    const { t } = useTranslation();

    useEffect(() => {
      validateForm();
    }, [validateForm, languageMode]);

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
          {t(ContentTxtKey.AddColumnButton)}
        </button>
      </div>
    );
  }
);
