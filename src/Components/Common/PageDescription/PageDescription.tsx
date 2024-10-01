import { type ReactElement, memo } from 'react';
import classes from './PageDescription.module.scss';

type PropsType = {
  title: string;
  textContent: string;
};

export const PageDescription = memo<PropsType>(({ title, textContent }): ReactElement => {
  return (
    <>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.textContent}>{textContent}</p>
    </>
  );
});
