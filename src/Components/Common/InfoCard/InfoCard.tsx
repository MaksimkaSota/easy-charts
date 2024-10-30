import type { ElementType, FC, ReactElement } from 'react';
import classes from './InfoCard.module.scss';

type PropsType = {
  boldText: string;
  text: string;
  TagSVG: ElementType;
};

export const InfoCard: FC<PropsType> = ({ boldText, text, TagSVG }): ReactElement => {
  return (
    <div className={classes.infoBlock}>
      <TagSVG className={classes.image} />
      <p className={classes.infoText}>
        <strong>{boldText}</strong> {text}
      </p>
    </div>
  );
};
