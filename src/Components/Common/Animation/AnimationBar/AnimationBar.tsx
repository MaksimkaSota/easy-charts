import { type FC, type ReactElement, useEffect, useRef } from 'react';
import classes from './AnimationBar.module.scss';
import { randomBackground, randomHeight } from '../../../../utils/helpers/componentsHelpers';
import { AnimationParameter } from '../../../../utils/types/enums';

export const AnimationBar: FC = (): ReactElement => {
  const barElement = useRef<HTMLDivElement>(null);

  const barBackgrounds = [
    AnimationParameter.RedBackground,
    AnimationParameter.YellowBackground,
    AnimationParameter.BlueBackground,
    AnimationParameter.GreenBackground,
  ];

  const setBarStyles = (isInitial: boolean): void => {
    if (barElement.current) {
      barElement.current.style.background = randomBackground(barBackgrounds);
      barElement.current.style.height = `${randomHeight(AnimationParameter.MaxHeight)}%`;
      if (!isInitial) {
        barElement.current.style.transition = AnimationParameter.Transition;
      }
    }
  };

  useEffect(() => {
    setBarStyles(true);

    let timerId = setTimeout(function tick() {
      setBarStyles(false);
      timerId = setTimeout(tick, 1000);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, []);

  return <div className={classes.bar} ref={barElement} />;
};
