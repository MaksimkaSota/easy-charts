import type { ChangeEvent } from 'react';
import type { FormikErrors } from 'formik';

export type SetFieldValueType = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;
export type HandleChangeType = (event: ChangeEvent<any>) => void;
export type FormikErrorsType = { [field: string]: any };
export type SubmitFormType = (() => Promise<void>) & (() => Promise<any>);
