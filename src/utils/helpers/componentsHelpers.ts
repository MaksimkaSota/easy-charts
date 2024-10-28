export const changeType = (
  setMainTypeChart: (type: string) => void,
  setExamplesTypeChart: (type: string) => void,
  type: string
): void => {
  setMainTypeChart(type);
  setExamplesTypeChart(type);
};

export const readByString = (path: string | string[], object: any, separator: string = '.'): string => {
  const properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev?.[curr], object);
};

export const randomBackground = (backgrounds: any[]): string => {
  const backgroundIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[backgroundIndex];
};

export const randomHeight = (maxHeight: number): number => {
  return Math.ceil(Math.random() * maxHeight);
};
