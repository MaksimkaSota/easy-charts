export interface IData {
  value: number | string;
  id?: string;
}

export interface IDataset {
  label: string;
  data: IData[];
  id?: string;
}

export interface IChart {
  type: string;
  data: {
    labels: IData[];
    datasets: IDataset[];
  };
  options: {
    title: {
      display: boolean;
      text: string;
    };
  };
}
