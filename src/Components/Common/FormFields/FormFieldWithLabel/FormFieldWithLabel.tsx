import { type ReactElement, type ReactNode, memo } from 'react';

type PropsType = {
  formContainerClassName: string;
  labelClassName: string;
  htmlFor: string;
  label: string;
  children: ReactNode;
};

export const FormFieldWithLabel = memo<PropsType>(
  ({ formContainerClassName, labelClassName, htmlFor, label, children }): ReactElement => {
    return (
      <div className={formContainerClassName}>
        <label className={labelClassName} htmlFor={htmlFor}>
          {label}
        </label>
        {children}
      </div>
    );
  }
);
