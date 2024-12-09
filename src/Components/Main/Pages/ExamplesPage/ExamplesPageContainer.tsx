import { type FC, type ReactElement, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, examplesOptionsSelector, viewSelector } from '../../../../redux/selectors/selectors';
import {
  isFetchingExampleFirstAddressSelector,
  isFetchingExampleSecondAddressSelector,
  isFetchingExampleThirdAddressSelector,
} from '../../../../redux/selectors/loading';
import {
  exampleFirstAddressErrorSelector,
  exampleSecondAddressErrorSelector,
  exampleThirdAddressErrorSelector,
} from '../../../../redux/selectors/error';
import { ExamplesPage } from './ExamplesPage';
import { StandardOption } from '../../../../utils/types/enums';

type PropsType = {
  isMainExamples?: boolean;
  isInfoExamples?: boolean;
  hidePageDescription?: boolean;
  hidePageDescriptionText?: boolean;
  hideChartSelectionMenu?: boolean;
  hideChartSelectionMenuTitle?: boolean;
  hideExampleChartsTitle?: boolean;
  showExampleChartTable?: boolean;
};

export const ExamplesPageContainer: FC<PropsType> = ({
  isMainExamples,
  isInfoExamples,
  hidePageDescription,
  hidePageDescriptionText,
  hideChartSelectionMenu,
  hideChartSelectionMenuTitle,
  hideExampleChartsTitle,
  showExampleChartTable,
}): ReactElement => {
  const isFetchingExampleFirstAddress = useTypedSelector(isFetchingExampleFirstAddressSelector);
  const isFetchingExampleSecondAddress = useTypedSelector(isFetchingExampleSecondAddressSelector);
  const isFetchingExampleThirdAddress = useTypedSelector(isFetchingExampleThirdAddressSelector);
  const { exampleFirstAddress, exampleSecondAddress, exampleThirdAddress } = useTypedSelector(addressesSelector);
  const exampleFirstAddressError = useTypedSelector(exampleFirstAddressErrorSelector);
  const exampleSecondAddressError = useTypedSelector(exampleSecondAddressErrorSelector);
  const exampleThirdAddressError = useTypedSelector(exampleThirdAddressErrorSelector);
  const { exampleFirstOptions, exampleSecondOptions, exampleThirdOptions } = useTypedSelector(examplesOptionsSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const {
    setExampleFirstAddressRequest,
    setExampleSecondAddressRequest,
    setExampleThirdAddressRequest,
    getExampleFirstAddress,
    getExampleSecondAddress,
    getExampleThirdAddress,
    setMainOptionsWithId,
    resetExamplesOptions,
  } = useActions();

  const getDebouncedFirstAddress = useDebouncedCallback(
    () => getExampleFirstAddress(exampleFirstOptions, StandardOption.Width, StandardOption.Height),
    900
  );
  const getDebouncedSecondAddress = useDebouncedCallback(
    () => getExampleSecondAddress(exampleSecondOptions, StandardOption.Width, StandardOption.Height),
    900
  );
  const getDebouncedThirdAddress = useDebouncedCallback(
    () => getExampleThirdAddress(exampleThirdOptions, StandardOption.Width, StandardOption.Height),
    900
  );

  useEffect(() => {
    setExampleFirstAddressRequest();
    setExampleSecondAddressRequest();
    setExampleThirdAddressRequest();
    getDebouncedFirstAddress();
    getDebouncedSecondAddress();
    getDebouncedThirdAddress();
  }, [
    getDebouncedFirstAddress,
    getDebouncedSecondAddress,
    getDebouncedThirdAddress,
    setExampleFirstAddressRequest,
    setExampleSecondAddressRequest,
    setExampleThirdAddressRequest,
    exampleFirstOptions,
    exampleSecondOptions,
    exampleThirdOptions,
  ]);

  useEffect(() => {
    resetExamplesOptions(languageMode);
  }, [resetExamplesOptions, languageMode]);

  return (
    <ExamplesPage
      isFetchingExampleFirstAddress={isFetchingExampleFirstAddress}
      exampleFirstAddress={exampleFirstAddress}
      exampleFirstAddressError={exampleFirstAddressError}
      isFetchingExampleSecondAddress={isFetchingExampleSecondAddress}
      exampleSecondAddress={exampleSecondAddress}
      exampleSecondAddressError={exampleSecondAddressError}
      isFetchingExampleThirdAddress={isFetchingExampleThirdAddress}
      exampleThirdAddress={exampleThirdAddress}
      exampleThirdAddressError={exampleThirdAddressError}
      exampleFirstOptions={exampleFirstOptions}
      exampleSecondOptions={exampleSecondOptions}
      exampleThirdOptions={exampleThirdOptions}
      setMainOptionsWithId={setMainOptionsWithId}
      isMainExamples={isMainExamples}
      isInfoExamples={isInfoExamples}
      hidePageDescription={hidePageDescription}
      hidePageDescriptionText={hidePageDescriptionText}
      hideChartSelectionMenu={hideChartSelectionMenu}
      hideChartSelectionMenuTitle={hideChartSelectionMenuTitle}
      hideExampleChartsTitle={hideExampleChartsTitle}
      showExampleChartTable={showExampleChartTable}
    />
  );
};
