import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './InfoBlock.module.scss';
import { ExamplesPageContainer } from '../../ExamplesPage/ExamplesPageContainer';
import { GalleryPage } from '../../GalleryPage/GalleryPage';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../../redux/selectors/selectors';

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
  const { themeMode } = useTypedSelector(viewSelector);

  return (
    <div className={classes.infoBlock}>
      <div className={cn(classes.textBlock, { [classes.thirdTextBlock]: isThirdInfoBlock })}>
        <h3 className={cn(classes.title, classes[`title-${themeMode}`])}>{titleText}</h3>
        <p className={classes.description}>{descriptionText}</p>
      </div>
      {isFirstInfoBlock && <GalleryPage isInfoGallery hidePageDescription hideChartSelectionButtonText />}
      {isSecondInfoBlock && (
        <ExamplesPageContainer
          isInfoExamples
          hidePageDescription
          hideChartSelectionMenu
          hideExampleChartsTitle
          showExampleChartTable
        />
      )}
    </div>
  );
};
