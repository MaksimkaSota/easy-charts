import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { changeType } from '../../../utils/helpers/componentsHelpers';

type PropsType = {
  isLink: boolean;
  type: string;
  src: string;
  text: string;
  classNameContainer: string;
  classNameText: string;
};

export const ChartSelectionButton: FC<PropsType> = ({
  isLink,
  type,
  src,
  text,
  classNameContainer,
  classNameText,
}): ReactElement => {
  const { setMainType, setExamplesType } = useActions();

  const CustomTag = isLink ? NavLink : 'div';
  const props = {
    to: isLink ? 'create' : undefined,
    className: classNameContainer,
    onClick: () => changeType(setMainType, setExamplesType, type),
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <CustomTag {...props}>
      <img src={src} alt={text} />
      <p className={classNameText}>{text}</p>
    </CustomTag>
  );
};
