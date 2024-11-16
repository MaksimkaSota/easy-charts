import { type FC, type ReactElement, useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './AnimationBar.module.scss';
import { randomBackground, randomHeight } from '../../../../utils/helpers/componentsHelpers';
import { AnimationParameter } from '../../../../utils/types/enums';

export const AnimationBar: FC = (): ReactElement => {
  const [isInitial, setIsInitial] = useState<boolean>(false);
  const [barHeight, setBarHeight] = useState<string>('');
  const [barBackground, setBarBackground] = useState<string>('');

  const styles = { height: barHeight, background: barBackground };

  const setBarStyles = (): void => {
    const height = randomHeight(AnimationParameter.MaxHeight);
    const background = randomBackground([
      AnimationParameter.RedBackground,
      AnimationParameter.YellowBackground,
      AnimationParameter.BlueBackground,
      AnimationParameter.GreenBackground,
    ]);

    setBarHeight(`${height}%`);
    setBarBackground(background);
  };

  useEffect(() => {
    setBarStyles();

    const isInitialTimerId = setTimeout(setIsInitial, 150, true);

    let barStylesTimerId = setTimeout(function tick() {
      setBarStyles();
      barStylesTimerId = setTimeout(tick, 1000);
    }, 300);

    return () => {
      clearTimeout(isInitialTimerId);
      clearTimeout(barStylesTimerId);
    };
    // eslint-disable-next-line
  }, []);

  return <div style={styles} className={cn(classes.bar, { [classes.initialBar]: isInitial })} />;
};
