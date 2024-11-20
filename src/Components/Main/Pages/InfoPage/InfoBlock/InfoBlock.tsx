import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './InfoBlock.module.scss';
import { ExamplesPageContainer } from '../../ExamplesPage/ExamplesPageContainer';
import { GalleryPage } from '../../GalleryPage/GalleryPage';

type PropsType = {
  titleText: string;
  descriptionText: string;
  isFirstInfoBlock?: boolean;
  isSecondInfoBlock?: boolean;
  isThirdInfoBlock?: boolean;
};

export const InfoBlock: FC<PropsType> = ({
  titleText,
  descriptionText,
  isFirstInfoBlock,
  isSecondInfoBlock,
  isThirdInfoBlock,
}): ReactElement => {
  return (
    <div className={classes.infoBlock}>
      <div className={cn(classes.textBlock, { [classes.thirdTextBlock]: isThirdInfoBlock })}>
        <h3 className={classes.title}>{titleText}</h3>
        <p className={classes.description}>{descriptionText}</p>
      </div>
      {isFirstInfoBlock && <GalleryPage isInfoPage />}
      {isSecondInfoBlock && <ExamplesPageContainer isInfoPage />}
    </div>
  );
};
