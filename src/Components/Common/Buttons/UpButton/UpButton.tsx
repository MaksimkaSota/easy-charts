import { type FC, type ReactElement, useEffect, useRef } from 'react';
import cn from 'classnames';
import classes from './UpButton.module.scss';

export const UpButton: FC = (): ReactElement => {
  const upButton = useRef<HTMLButtonElement>(null);

  const onScroll = (): void => {
    const element: HTMLElement = document.documentElement;

    if (upButton.current) {
      upButton.current.hidden = element.scrollTop < element.clientHeight;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
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
