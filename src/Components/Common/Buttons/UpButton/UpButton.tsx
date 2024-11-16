import { type FC, type ReactElement, useEffect, useState } from 'react';
import { useThrottledCallback } from 'use-debounce';
import cn from 'classnames';
import classes from './UpButton.module.scss';
import { EventType } from '../../../../utils/types/enums';

export const UpButton: FC = (): ReactElement => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isClickScroll, setIsClickScroll] = useState<boolean>(false);

  const onScroll = (): void => {
    const element: HTMLElement = document.documentElement;

    if (element.scrollTop === 0) {
      setIsHidden(true);
      setIsClickScroll(false);
    }

    if (!isClickScroll) {
      setIsHidden(element.scrollTop < element.clientHeight);
    }
  };

  const onThrottledScroll = useThrottledCallback(onScroll, 30);

  useEffect(() => {
    window.addEventListener(EventType.Scroll, onThrottledScroll);

    return () => {
      window.removeEventListener(EventType.Scroll, onThrottledScroll);
    };
  }, [onThrottledScroll]);

  const onButtonClick = (): void => {
    setIsClickScroll(true);

    window.scrollTo(0, 0);
  };

  return (
    <button className={classes.upButton} onClick={onButtonClick} aria-label="Go up" hidden={isHidden}>
      <span className={cn(classes.line, classes.line1)} />
      <span className={cn(classes.line, classes.line2)} />
    </button>
  );
};
