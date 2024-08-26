import { ChangeEvent, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import classes from './ChartViewAndSave.module.scss';

const ChartViewAndSave = () => {
  const {mainAddress} = useTypedSelector((state) => state.addresses);
  const {width, height} = useTypedSelector((state) => state.mainOptions);
  const {setWidth, setHeight} = useActions();

  const [widthValue, setWidthValue] = useState<number>(width);
  const [heightValue, setHeightValue] = useState<number>(height);

  const onWidthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWidthValue(+event.target.value);
    setWidth(+event.target.value);
  };
  const onHeightChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setHeightValue(+event.target.value);
    setHeight(+event.target.value);
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

export default ChartViewAndSave;
