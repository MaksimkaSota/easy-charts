import { type ReactElement, type ChangeEvent, memo } from 'react';
import { ErrorMessage, Field } from 'formik';
import cn from 'classnames';
import classes from './FormField.module.scss';
import type { FormikErrorsType } from '../../../../utils/types/form';
import { readByString } from '../../../../utils/helpers/componentsHelpers';

type PropsType = {
  classNameFormField?: string;
  classNameField: string;
  name: string;
  component?: string;
  type?: string;
  id?: string;
  errors?: FormikErrorsType;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<any>) => void;
  onKeyPress?: (event: KeyboardEvent) => void;
};

export const FormField = memo<PropsType>(
  ({ classNameFormField, classNameField, name, component = 'input', errors, ...props }): ReactElement => {
    return (
      <div className={cn(classes.formFieldContainer, classNameFormField)}>
        <Field
          className={cn(classes.field, classNameField, { [classes.validationError]: readByString(name, errors) })}
          name={name}
          component={component}
          {...props}
        />
        <ErrorMessage name={name} component="p" className={classes.fieldError} />
      </div>
    );
  }
);
