import type { FC, ReactElement } from 'react';
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
    setMainData,
    setMainLabelInData,
    addMainRow,
    addMainColumn,
    removeMainRow,
    removeMainColumn,
    setMainWidth,
    setMainHeight,
  } = useActions();

  return (
    <CreatingPage
      mainAddress={mainAddress}
      mainOptions={mainOptions}
      width={width}
      height={height}
      getAddress={getAddress}
      setMainTitle={setMainTitle}
      setMainLabels={setMainLabels}
      setMainData={setMainData}
      setMainLabelInData={setMainLabelInData}
      addMainRow={addMainRow}
      addMainColumn={addMainColumn}
      removeMainRow={removeMainRow}
      removeMainColumn={removeMainColumn}
      setMainWidth={setMainWidth}
      setMainHeight={setMainHeight}
    />
  );
};
