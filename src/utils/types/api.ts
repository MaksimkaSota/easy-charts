export interface IChart {
  type: string;
  data: {
    labels: string[];
    datasets: IDatasets[];
  };
  options: {
    title: {
      display: boolean;
      text: string;
    };
  };
}

export interface IDatasets {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}
