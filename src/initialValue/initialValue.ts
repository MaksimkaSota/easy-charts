import { IChart } from "../IChart";

export const initialValue: IChart = {
  type: "bar",
  data: {
    labels: ["Строка 1", "Строка 2", "Строка 3", "Строка 4"],
    datasets: [
      {
        label: "Заголовок 1",
        data: [1, 2, 3, 4],
      },
    ],
  },
};
