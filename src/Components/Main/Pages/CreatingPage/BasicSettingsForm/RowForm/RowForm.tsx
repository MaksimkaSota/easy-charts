import { type ChangeEvent, type ReactElement, memo } from 'react';
import classes from './RowForm.module.scss';
import type { FormikErrorsType } from '../../../../../../utils/types/form';
import { FormField } from '../../../../../Common/FormField/FormField';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {
  labelIndex: number;
  setLabels: (id: number, value: string) => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
};

export const RowForm = memo<PropsType>(({ labelIndex, setLabels, removeRow, errors }): ReactElement => {
  const onLabelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLabels(labelIndex, event.target.value);
  };

  return (
    <div className={classes.deleteRowContainer}>
      {/* eslint-disable-next-line */}
      <div title="Удалить эту строку" className={classes.closeX} onClick={() => removeRow(labelIndex)} />
      <FormField
        classNameField={classes.inputData}
        name={`${FormName.labels}.${labelIndex}`}
        type="text"
        onChange={onLabelChange}
        errors={errors}
      />
    </div>
  );
});
