import { type ReactElement, memo } from 'react';
import cn from 'classnames';
import { ErrorMessage, Field } from 'formik';
import classes from './FormField.module.scss';
import type { FormikErrorsType, HandleChangeType } from '../../../utils/types/form';
import { readByString } from '../../../utils/helpers/componentsHelpers';

type PropsType = {
  classNameFormField?: string;
  classNameField: string;
  name: string;
  component?: string;
  type?: string;
  id?: string;
  errors?: FormikErrorsType;
  onChange?: HandleChangeType;
};

export const FormField = memo<PropsType>(
  ({ classNameFormField, classNameField, name, component = 'input', errors, ...props }): ReactElement => {
    return (
      <div className={cn(classes.formFieldContainer, classNameFormField)}>
        <Field
          className={cn(classNameField, { [classes.validationError]: readByString(name, errors) })}
          name={name}
          component={component}
          {...props}
        />
        <ErrorMessage name={name} component="p" className={classes.fieldError} />
      </div>
    );
  }
);
