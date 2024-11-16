import { type ReactElement, memo } from 'react';
import cn from 'classnames';
import classes from './PageDescription.module.scss';

type PropsType = {
  title: string;
  textContent: string;
  isMainPage?: boolean;
};

export const PageDescription = memo<PropsType>(({ title, textContent, isMainPage }): ReactElement => {
  return (
    <div className={cn(classes.pageDescription, { [classes.mainPagePageDescription]: isMainPage })}>
      <h2 className={cn(classes.title, { [classes.mainPageTitle]: isMainPage })}>{title}</h2>
      {!isMainPage && <p className={classes.textContent}>{textContent}</p>}
    </div>
  );
});
