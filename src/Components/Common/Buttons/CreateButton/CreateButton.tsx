import type { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './CreateButton.module.scss';
import { useActions } from '../../../../hooks/useActions';
import { ChartType, RoutePath, ContentTxtKey } from '../../../../utils/types/enums';
import { mainInitialValue } from '../../../../utils/initialValues/mainInitialValue';

export const CreateButton: FC = (): ReactElement => {
  const { setMainOptionsWithId, setExamplesType } = useActions();

  const { t } = useTranslation();

  const resetOptions = (): void => {
    setMainOptionsWithId(mainInitialValue);
    setExamplesType(ChartType.Bar);
  };

  return (
    <NavLink to={RoutePath.Create} className={classes.link} onClick={resetOptions}>
      {t(ContentTxtKey.CreateButton)}
    </NavLink>
  );
};
