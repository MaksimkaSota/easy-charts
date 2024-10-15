import { type ChangeEvent, type ReactElement, memo } from 'react';
import cn from 'classnames';
import classes from './RowForm.module.scss';
import type { FormikErrorsType } from '../../../../../../utils/types/form';
import { FormField } from '../../../../../Common/FormField/FormField';
import { FormName } from '../../../../../../utils/types/enums';

type PropsType = {
  labelIndex: number;
  labelsLength: number;
  setLabels: (id: number, value: string) => void;
  removeRow: (index: number) => void;
  errors: FormikErrorsType;
};

export const RowForm = memo<PropsType>(({ labelIndex, labelsLength, setLabels, removeRow, errors }): ReactElement => {
  const onLabelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLabels(labelIndex, event.target.value);
  };

  return (
    <div className={classes.deleteRowContainer}>
      <button
        type="button"
        aria-label="Remove row"
        title="Удалить эту строку"
        className={cn(classes.closeX, { [classes.closeXHover]: labelsLength !== 1 })}
        onClick={() => removeRow(labelIndex)}
        disabled={labelsLength === 1}
      />
      <FormField
        classNameField={classes.inputData}
        name={`${FormName.Labels}.${labelIndex}.value`}
        type="text"
        onChange={onLabelChange}
        errors={errors}
      />
    </div>
  );
});
