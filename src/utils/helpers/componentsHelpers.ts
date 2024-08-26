import { SetTypeAction } from '../../redux/types/mainOptions';
import { SetExamplesTypeAction } from '../../redux/types/examplesOptions';

export const changeType = (
  setMainTypeChart: (type: string) => SetTypeAction,
  setExamplesTypeChart: (type: string) => SetExamplesTypeAction,
  type: string
): void => {
  setMainTypeChart(type);
  setExamplesTypeChart(type);
};
