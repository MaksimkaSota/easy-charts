export const setLocalItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = <T>(key: string): T | null => {
  try {
    const item: string | null = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const removeLocalItem = (key: string): void => {
  localStorage.removeItem(key);
};
