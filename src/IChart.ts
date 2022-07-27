export interface IChart {
  type: string;
  data: {
    labels: string[];
    datasets: IDatasets[];
  };
  imageURL?: string;
  // options: {
  //   title: {
  //     display: boolean;
  //     text: string;
  //   };
  // };
}

export interface IDatasets {
  label: string;
  data: any[];
}
