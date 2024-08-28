// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformImageToBase64 = (blob: Blob): Promise<any> => {
  return new Promise((resolve, reject): void => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
