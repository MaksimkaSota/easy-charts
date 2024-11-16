import type { FC, ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import classes from './DisabledInteractionButton.module.scss';

type PropsType = {
  isFetchingMainAddress: boolean;
  mainAddressError: Nullable<ErrorType>;
  text: string;
  children: ReactNode;
};

export const DisabledInteractionButton: FC<PropsType> = ({
  isFetchingMainAddress,
  mainAddressError,
  text,
  children,
}): ReactElement => {
  return isFetchingMainAddress || mainAddressError ? (
    <p className={cn(classes.interactionButton, classes.disabled)}>{text}</p>
  ) : (
    // eslint-disable-next-line
    <>{children}</>
  );
};
