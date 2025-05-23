import type { ChangeEvent, SetStateAction } from 'react';
import type { FormikErrors } from 'formik';
import type { ObjectType } from './common';

export type SetValuesType<T> = (
  fields: SetStateAction<T>,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;

export type SetFieldValueType = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;

export type SetTouchedType = (
  fields: ObjectType<boolean>,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;

export type HandleChangeType = (event: ChangeEvent<any>) => void;

export type ValidateFormType = (values?: any) => Promise<FormikErrors<any>>;

export type FormikErrorsType = ObjectType;
