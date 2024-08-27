export const changeType = (
  setMainTypeChart: (type: string) => void,
  setExamplesTypeChart: (type: string) => void,
  type: string
): void => {
  setMainTypeChart(type);
  setExamplesTypeChart(type);
};
