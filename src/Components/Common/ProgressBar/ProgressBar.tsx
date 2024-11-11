import { type FC, type ReactElement, useEffect, useRef } from 'react';
import classes from './ProgressBar.module.scss';

export const ProgressBar: FC = (): ReactElement => {
  const progressBar = useRef<HTMLDivElement>(null);

  const onScroll = (): void => {
    const element: HTMLElement = document.documentElement;

    const scroll = element.scrollTop;
    const height = element.scrollHeight - element.clientHeight;
    const scrolled = (scroll / height) * 100;

    if (progressBar.current) {
      progressBar.current.style.width = `${scrolled}%`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className={classes.progressBar} ref={progressBar} />;
};
