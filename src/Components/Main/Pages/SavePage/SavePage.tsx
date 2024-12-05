import { type FC, type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './SavePage.module.scss';
import { copyTextOnClick } from '../../../../utils/helpers/servicesHelpers';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { ProgressBar } from '../../../Common/ProgressBar/ProgressBar';
import { UpButton } from '../../../Common/Buttons/UpButton/UpButton';
import { Chart } from '../../../Common/Chart/Chart';
import { DisabledInteractionButton } from '../../../Common/Buttons/DisabledInteractionButton/DisabledInteractionButton';
import { ContentTxtKey } from '../../../../utils/types/enums';

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
  const { t } = useTranslation();

  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopyUrlClick = (): void => {
    copyTextOnClick(urlAddress, setCopyStatus, setIsCopied);
  };

  return (
    <div className={classes.viewAndSave}>
      <ProgressBar />
      <UpButton />
      <div className={classes.interactionButtonsContainer}>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text={t(ContentTxtKey.OpenButton)}
        >
          <a className={classes.interactionButton} href={urlAddress} target="_blank" rel="noopener noreferrer">
            {t(ContentTxtKey.OpenButton)}
          </a>
        </DisabledInteractionButton>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text={t(ContentTxtKey.SaveButton)}
        >
          <a className={classes.interactionButton} href={mainAddress} download="EasyChart.png">
            {t(ContentTxtKey.SaveButton)}
          </a>
        </DisabledInteractionButton>
        <DisabledInteractionButton
          isFetchingMainAddress={isFetchingMainAddress}
          mainAddressError={mainAddressError}
          text={t(ContentTxtKey.CopyButton)}
        >
          <button
            className={cn(classes.interactionButton, { [classes.copyButton]: isCopied })}
            onClick={onCopyUrlClick}
            disabled={isCopied}
          >
            {isCopied ? copyStatus : t(ContentTxtKey.CopyButton)}
          </button>
        </DisabledInteractionButton>
      </div>
      <div className={classes.imgContainer}>
        <Chart isFetchingAddress={isFetchingMainAddress} address={mainAddress} addressError={mainAddressError} />
      </div>
    </div>
  );
};
