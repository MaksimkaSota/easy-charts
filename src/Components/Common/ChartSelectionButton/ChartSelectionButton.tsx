import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { changeType } from '../../../utils/helpers/componentsHelpers';
import { RoutePath } from '../../../utils/types/enums';

type PropsType = {
  isLink?: boolean;
  isDisabled?: boolean;
  type: string;
  src: string;
  text: string;
  classNameContainer: string;
  classNameText: string;
};

export const ChartSelectionButton: FC<PropsType> = ({
  isLink = false,
  isDisabled = false,
  type,
  src,
  text,
  classNameContainer,
  classNameText,
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
      <img src={src} alt={text} />
      <p className={classNameText}>{text}</p>
    </CustomTag>
  );
};
