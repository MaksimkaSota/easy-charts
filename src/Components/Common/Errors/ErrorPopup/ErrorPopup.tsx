import { type FC, type KeyboardEvent, type MouseEvent, type ReactElement, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPopup.module.scss';
import { Error } from '../Error/Error';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { ContentTxtKey, EventType, KeyboardEventCode } from '../../../../utils/types/enums';

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

  const handleInteraction = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void => {
    if (
      (event.type === EventType.Click &&
        (event.target as HTMLDivElement).className === errorPopup.current?.className) ||
      (event.type === EventType.Keydown && (event as KeyboardEvent).code === KeyboardEventCode.Escape)
    ) {
      resetError(null);
    }
  };

  return (
    errorObject && (
      <div
        className={classes.errorPopup}
        ref={errorPopup}
        role="button"
        tabIndex={0}
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
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
