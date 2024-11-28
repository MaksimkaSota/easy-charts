export const setLocalItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const removeLocalItem = (key: string): void => {
  localStorage.removeItem(key);
};
