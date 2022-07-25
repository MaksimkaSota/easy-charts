export interface IChart {
  type: string;
  data: {
    labels: string[];
    datasets: IDatasets[];
  };
  imageURL?: string;
}

export interface IDatasets {
  label: string;
  data: any[];
}
