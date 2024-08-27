import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypeSelector';
import { useActions } from '../../../../../hooks/useActions';
import { addressesSelector, mainOptionsSelector } from '../../../../../redux/selectors/selectors';
import classes from './ChartAdditionalSettings.module.scss';

export const ChartAdditionalSettings: FC = (): ReactElement => {
  const {mainAddress} = useTypedSelector(addressesSelector);
  const {width, height} = useTypedSelector(mainOptionsSelector);
  const {setMainWidth, setMainHeight} = useActions();

  const [widthValue, setWidthValue] = useState<number>(width);
  const [heightValue, setHeightValue] = useState<number>(height);

  const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWidthValue(+event.target.value);
    setMainWidth(+event.target.value);
  };
  const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setHeightValue(+event.target.value);
    setMainHeight(+event.target.value);
  };

  return (
    <div className={classes.chartViewAndSave}>
      <p className={classes.miniTitle}>Параметры графика</p>
      <div className={classes.params}>
        <label className={classes.labelSettingsForm} htmlFor="width">
          Ширина:
        </label>
        <input type="text" id="width" value={widthValue} onChange={onWidthChange} />
      </div>
      <div className={classes.params}>
        <label className={classes.labelSettingsForm} htmlFor="height">
          Высота:
        </label>
        <input type="text" id="height" value={heightValue} onChange={onHeightChange} />
      </div>
      <a className={classes.link} href={mainAddress} download>
        Сохранить график
      </a>
    </div>
  );
};
