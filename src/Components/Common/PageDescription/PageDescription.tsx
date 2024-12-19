import { type ReactElement, memo } from 'react';
import cn from 'classnames';
import classes from './PageDescription.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { viewSelector } from '../../../redux/selectors/selectors';

type PropsType = {
  title: string;
  textContent: string;
  hidePageDescriptionText?: boolean;
};

export const PageDescription = memo<PropsType>(({ title, textContent, hidePageDescriptionText }): ReactElement => {
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={cn(classes.pageDescription, { [classes.blockWithoutDescriptionText]: hidePageDescriptionText })}>
      <h2
        className={cn(classes.title, classes[`title-${themeMode}`], {
          [classes.titleWithoutDescriptionText]: hidePageDescriptionText,
        })}
      >
        {title}
      </h2>
      {!hidePageDescriptionText && <p className={classes.textContent}>{textContent}</p>}
    </div>
  );
});
