import { type FC, type ReactElement, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, mainOptionsSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { CreatingPage } from './CreatingPage';
import { mainAddressErrorSelector } from '../../../../redux/selectors/error';
import { isFetchingMainAddressSelector } from '../../../../redux/selectors/loading';
import { StandardOption } from '../../../../utils/types/enums';

export const CreatingPageContainer: FC = (): ReactElement => {
  const isFetchingMainAddress = useTypedSelector(isFetchingMainAddressSelector);
  const { mainAddress } = useTypedSelector(addressesSelector);
  const mainAddressError = useTypedSelector(mainAddressErrorSelector);
  const { mainOptions, width, height } = useTypedSelector(mainOptionsSelector);
  const { themeMode } = useTypedSelector(viewSelector);

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
    setMainOptionsWithId,
    setExamplesType,
    setMainAddressRequest,
  } = useActions();

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
      setMainOptionsWithId={setMainOptionsWithId}
      setExamplesType={setExamplesType}
      themeMode={themeMode}
    />
  );
};
