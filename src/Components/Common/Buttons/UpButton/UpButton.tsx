import { type FC, type ReactElement, useEffect, useRef } from 'react';
import cn from 'classnames';
import classes from './UpButton.module.scss';
import { EventType } from '../../../../utils/types/enums';

export const UpButton: FC = (): ReactElement => {
  const upButton = useRef<HTMLButtonElement>(null);

  const onScroll = (): void => {
    const element: HTMLElement = document.documentElement;

    if (upButton.current) {
      upButton.current.hidden = element.scrollTop < element.clientHeight;
    }
  };

  useEffect(() => {
    window.addEventListener(EventType.Scroll, onScroll);

    return () => {
      window.removeEventListener(EventType.Scroll, onScroll);
    };
  }, []);

  const onButtonClick = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <button className={classes.upButton} ref={upButton} aria-label="Go up" onClick={onButtonClick} hidden>
      <span className={cn(classes.line, classes.line1)} />
      <span className={cn(classes.line, classes.line2)} />
    </button>
  );
};
