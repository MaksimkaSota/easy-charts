import { IChart } from "../IChart";

export const exampleValueSecond: IChart = {
  type: "bar",
  data: {
    labels: [
      "Численность мужского населения",
      "Численность женского населения",
    ],
    datasets: [
      {
        label: "Показатели по гендеру (мужчины/женщины), %",
        data: [50.5, 49.5],
      },
    ],
  },
  imageURL: "",
};
