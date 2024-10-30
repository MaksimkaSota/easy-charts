import { type FC, type ReactElement, useState } from 'react';
import cn from 'classnames';
import classes from './SavePage.module.scss';
import { copyTextOnClick } from '../../../../utils/helpers/servicesHelpers';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { Chart } from '../../../Common/Chart/Chart';
import { DisabledInteractionButton } from '../../../Common/Buttons/DisabledInteractionButton/DisabledInteractionButton';

type PropsType = {
  isFetchingMainAddress: boolean;
  mainAddress: string;
  mainAddressError: Nullable<ErrorType>;
  urlAddress: string;
};

export const SavePage: FC<PropsType> = ({
  isFetchingMainAddress,
  mainAddress,
  mainAddressError,
  urlAddress,
}): ReactElement => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopyUrlClick = (): void => {
    copyTextOnClick(urlAddress, setCopyStatus, setIsCopied);
  };

  return (
    <div className={classes.viewAndSave}>
      <div className={classes.interactionButtonsContainer}>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text="Открыть график в новой вкладке (формат 1:1)"
        >
          <a className={classes.interactionButton} href={urlAddress} target="_blank" rel="noopener noreferrer">
            Открыть график в новой вкладке (формат 1:1)
          </a>
        </DisabledInteractionButton>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text="Сохранить график"
        >
          <a className={classes.interactionButton} href={urlAddress} download="EasyChart.png">
            Сохранить график
          </a>
        </DisabledInteractionButton>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text="Копировать URL графика"
        >
          <button
            className={cn(classes.interactionButton, { [classes.copyButton]: isCopied })}
            onClick={onCopyUrlClick}
            disabled={isCopied}
          >
            {isCopied ? copyStatus : 'Копировать URL графика'}
          </button>
        </DisabledInteractionButton>
      </div>
      <div className={classes.imgContainer}>
        <Chart isFetchingAddress={isFetchingMainAddress} address={mainAddress} addressError={mainAddressError} />
      </div>
    </div>
  );
};
