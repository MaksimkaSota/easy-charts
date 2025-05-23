import { type FC, type ReactElement, useEffect, useState } from 'react';
import { useThrottledCallback } from 'use-debounce';
import classes from './ProgressBar.module.scss';
import { EventType } from '../../../utils/types/enums';

export const ProgressBar: FC = (): ReactElement => {
  const [progressBarWidth, setProgressBarWidth] = useState<string>('');

  const styles = { width: progressBarWidth };

  const onScroll = (): void => {
    const element: HTMLElement = document.documentElement;

    const scroll = element.scrollTop;
    const height = element.scrollHeight - element.clientHeight;
    const scrollableValue = (scroll / height) * 100;

    setProgressBarWidth(`${scrollableValue}%`);
  };

  const onThrottledScroll = useThrottledCallback(onScroll, 30);

  useEffect(() => {
    window.addEventListener(EventType.Scroll, onThrottledScroll);

    return () => {
      window.removeEventListener(EventType.Scroll, onThrottledScroll);
    };
  }, [onThrottledScroll]);

  return <div style={styles} className={classes.progressBar} />;
};
