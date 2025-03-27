import { type ElementType, type FC, type ReactElement, useState } from 'react';
import cn from 'classnames';
import classes from './Image.module.scss';

type PropsType = {
  ImageSVG: ElementType;
  image: string;
  altTxt: string;
  className: string;
};

export const Image: FC<PropsType> = ({ ImageSVG, image, altTxt, className }): ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className={cn(classes.container, className)}>
      <ImageSVG className={cn(classes.image, classes.imageMin, { [classes.hiddenImageMin]: isLoaded })} />
      <img
        className={cn(classes.image, classes.imageMax, { [classes.shownImageMax]: isLoaded })}
        src={image}
        alt={altTxt}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
