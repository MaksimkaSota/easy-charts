import { type FC, type ReactElement, type MouseEvent, type KeyboardEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { KeyboardEventCode, ContentTxtKey } from '../../../../utils/types/enums';

type PropsType = {
  errorObject: Nullable<ErrorType>;
  resetError: (error: Nullable<ErrorType>) => void;
};

export const ErrorPopup: FC<PropsType> = ({ errorObject, resetError }): ReactElement | null => {
  const { t } = useTranslation();

  const errorPopup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    errorPopup.current?.focus();
  }, [errorObject]);

  const onButtonClick = (): void => {
    resetError(null);
  };

  const onPopupMouseClick = (event: MouseEvent<HTMLDivElement>): void => {
    if ((event.target as Element).className === errorPopup.current?.className) {
      resetError(null);
    }
  };

  const onKeyboardPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.code === KeyboardEventCode.Escape) {
      resetError(null);
    }
  };

  return (
    errorObject && (
      <div
        className={classes.errorPopup}
        ref={errorPopup}
        tabIndex={-1}
        onClick={onPopupMouseClick}
        onKeyDown={onKeyboardPress}
      >
        <div className={classes.errorPopupContainer}>
          <Error message={errorObject.message} code={errorObject.code} />
          <button className={classes.errorPopupButton} onClick={onButtonClick}>
            {t(ContentTxtKey.CloseButton)}
          </button>
        </div>
      </div>
    )
  );
};
