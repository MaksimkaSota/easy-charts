import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { viewSelector } from '../../../../redux/selectors/selectors';
import classes from './CreateButton.module.scss';
import { ChartType, ContentTxtKey, RoutePath } from '../../../../utils/types/enums';

export const CreateButton: FC = (): ReactElement => {
  const { languageMode } = useTypedSelector(viewSelector);

  const { resetMainOptions, setExamplesType } = useActions();

  const { t } = useTranslation();

  const resetOptions = (): void => {
    resetMainOptions(languageMode);
    setExamplesType(ChartType.Bar);
  };

  return (
    <NavLink to={RoutePath.Create} className={classes.link} onClick={resetOptions}>
      {t(ContentTxtKey.CreateButton)}
    </NavLink>
  );
};
