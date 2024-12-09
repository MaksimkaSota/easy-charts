import { type FC, type ReactElement, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { isFetchingMainAddressSelector } from '../../../../redux/selectors/loading';
import { addressesSelector, mainOptionsSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { mainAddressErrorSelector } from '../../../../redux/selectors/error';
import { CreatingPage } from './CreatingPage';
import { LocalStorageKey, StandardOption } from '../../../../utils/types/enums';
import type { IChart } from '../../../../utils/types/api/chart';
import { getLocalItem } from '../../../../services/browserDataStorage/localStorage';

export const CreatingPageContainer: FC = (): ReactElement => {
  const isFetchingMainAddress = useTypedSelector(isFetchingMainAddressSelector);
  const { mainAddress } = useTypedSelector(addressesSelector);
  const mainAddressError = useTypedSelector(mainAddressErrorSelector);
  const { mainOptions, width, height } = useTypedSelector(mainOptionsSelector);
  const { themeMode, languageMode } = useTypedSelector(viewSelector);

  const {
    getAddress,
    setMainTitle,
    setMainLabels,
    setMainDataInDatasets,
    setMainLabelInDatasets,
    addMainRow,
    addMainColumn,
    removeMainRow,
    removeMainColumn,
    setMainWidth,
    setMainHeight,
    resetMainOptions,
    setExamplesType,
    setMainAddressRequest,
  } = useActions();

  useEffect(() => {
    if (!getLocalItem<IChart>(LocalStorageKey.MainOptions)) {
      resetMainOptions(languageMode);
    }
  }, [resetMainOptions, languageMode]);

  const getDebouncedAddress = useDebouncedCallback(
    () => getAddress(mainOptions, StandardOption.Width, StandardOption.Height),
    900
  );

  useEffect(() => {
    setMainAddressRequest();
    getDebouncedAddress();
  }, [getDebouncedAddress, setMainAddressRequest, mainOptions]);

  return (
    <CreatingPage
      isFetchingMainAddress={isFetchingMainAddress}
      mainAddress={mainAddress}
      mainAddressError={mainAddressError}
      mainOptions={mainOptions}
      width={width}
      height={height}
      setMainTitle={setMainTitle}
      setMainLabels={setMainLabels}
      setMainData={setMainDataInDatasets}
      setMainLabelInDatasets={setMainLabelInDatasets}
      addMainRow={addMainRow}
      addMainColumn={addMainColumn}
      removeMainRow={removeMainRow}
      removeMainColumn={removeMainColumn}
      setMainWidth={setMainWidth}
      setMainHeight={setMainHeight}
      resetMainOptions={resetMainOptions}
      setExamplesType={setExamplesType}
      themeMode={themeMode}
    />
  );
};
