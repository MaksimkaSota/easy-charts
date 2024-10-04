import { type FC, type ReactElement, useState } from 'react';
import cn from 'classnames';
import classes from './SavePage.module.scss';
import { copyTextOnClick } from '../../../../utils/helpers/servicesHelpers';

type PropsType = {
  mainAddress: string;
  urlAddress: string;
};

export const SavePage: FC<PropsType> = ({ mainAddress, urlAddress }): ReactElement => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopyUrlClick = (): void => {
    copyTextOnClick(urlAddress, setCopyStatus, setIsCopied);
  };

  return (
    <div className={classes.viewAndSave}>
      <div className={classes.interactionButtonsContainer}>
        <a className={classes.interactionButton} href={urlAddress} target="_blank" rel="noopener noreferrer">
          Открыть график в новой вкладке (формат 1:1)
        </a>
        <a className={cn(classes.interactionButton, classes.saveButton)} href={mainAddress} download="EasyChart.png">
          Сохранить график
        </a>
        <button
          className={cn(classes.interactionButton, { [classes.copyButton]: isCopied })}
          onClick={onCopyUrlClick}
          disabled={isCopied}
        >
          {isCopied ? copyStatus : 'Копировать URL графика'}
        </button>
        {}
      </div>
      <img className={classes.img} src={mainAddress} alt="График" />
    </div>
  );
};
