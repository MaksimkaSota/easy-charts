export interface IDataset {
  label: string;
  data: Array<number | string>;
}

export interface IChart {
  type: string;
  data: {
    labels: string[];
    datasets: IDataset[];
  };
  options: {
    title: {
      display: boolean;
      text: string;
    };
  };
}
