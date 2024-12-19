import { type ChangeEvent, memo, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './RowForm.module.scss';
import type { FormikErrorsType } from '../../../../../../utils/types/form';
import { FormField } from '../../../../../Common/FormFields/FormField/FormField';
import { ContentTxtKey, FieldName } from '../../../../../../utils/types/enums';

type PropsType = {
  labelIndex: number;
  labelsLength: number;
  setLabels: (id: number, value: string) => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
};

export const RowForm = memo<PropsType>(({ labelIndex, labelsLength, setLabels, removeRow, errors }): ReactElement => {
  const { t } = useTranslation();

  const onLabelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLabels(labelIndex, event.target.value);
  };

  return (
    <div className={classes.deleteRowContainer}>
      <button
        type="button"
        aria-label="Remove row"
        title={labelsLength !== 1 ? t(ContentTxtKey.RowHint) : undefined}
        className={cn(classes.closeX, { [classes.closeXHover]: labelsLength !== 1 })}
        onClick={() => removeRow(labelIndex)}
        disabled={labelsLength === 1}
      >
        X
      </button>
      <FormField
        classNameField={classes.inputData}
        name={`${FieldName.Labels}.${labelIndex}.value`}
        type="text"
        onChange={onLabelChange}
        errors={errors}
      />
    </div>
  );
});
