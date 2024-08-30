export interface IDataset {
  label: string;
  data: number[];
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
