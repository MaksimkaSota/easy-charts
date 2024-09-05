import { type FC, type ReactElement, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { addressesSelector, mainOptionsSelector } from '../../../../redux/selectors/selectors';
import { CreatingPage } from './CreatingPage';

export const CreatingPageContainer: FC = (): ReactElement => {
  const { mainAddress } = useTypedSelector(addressesSelector);
  const { mainOptions, width, height } = useTypedSelector(mainOptionsSelector);
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
  } = useActions();

  useEffect(() => {
    getAddress(mainOptions, width, height);
    // eslint-disable-next-line
  }, [mainOptions]);

  return (
    <CreatingPage
      mainAddress={mainAddress}
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
    />
  );
};
