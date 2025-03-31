import type { ElementType, FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';
import { changeType } from '../../../../utils/helpers/componentsHelpers';
import { RoutePath } from '../../../../utils/types/enums';

type PropsType = {
  isLink?: boolean;
  isDisabled?: boolean;
  type: string;
  Chart: ElementType;
  text: string;
  classNameContainer: string;
  classNameText: string;
  hideChartSelectionButtonText?: boolean;
};

export const ChartSelectionButton: FC<PropsType> = ({
  isLink = false,
  isDisabled = false,
  type,
  Chart,
  text,
  classNameContainer,
  classNameText,
  hideChartSelectionButtonText,
}): ReactElement => {
  const { setMainType, setExamplesType } = useActions();

  const CustomTag = isLink ? NavLink : 'div';
  const props = {
    to: isLink ? RoutePath.Create : undefined,
    className: classNameContainer,
    onClick: isDisabled ? undefined : () => changeType(setMainType, setExamplesType, type),
  };

  return (
    // @ts-ignore
    <CustomTag {...props}>
      <Chart alt={text} />
      {!hideChartSelectionButtonText && <p className={classNameText}>{text}</p>}
    </CustomTag>
  );
};
