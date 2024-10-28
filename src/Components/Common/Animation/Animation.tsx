import { type FC, type ReactElement, useEffect, useRef, useState } from 'react';
import classes from './Animation.module.scss';
import { AnimationBar } from './AnimationBar/AnimationBar';
import { AnimationParameter } from '../../../utils/types/enums';

export const Animation: FC = (): ReactElement => {
  const animationElement = useRef<HTMLDivElement>(null);
  const [barAmount, setBarAmount] = useState<number>(0);

  useEffect(() => {
    if (animationElement.current) {
      const widthAnimationBlock = animationElement.current.offsetWidth;
      setBarAmount(Math.floor(widthAnimationBlock / AnimationParameter.BarAndIndentWidth));
    }
  }, []);

  return (
    <div className={classes.animationBlock} ref={animationElement}>
      {[...new Array(barAmount)].map((item, index: number): ReactElement => {
        return <AnimationBar key={index} />;
      })}
    </div>
  );
};
