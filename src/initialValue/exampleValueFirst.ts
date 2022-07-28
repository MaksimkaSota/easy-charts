import { IChart } from "./IChart";

export const exampleValueFirst: IChart = {
  type: "bar",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Все население",
        data: [9470, 9448, 9429, 9410, 9350],
      },
      {
        label: "Мужчины",
        data: [4378, 4367, 4358, 4350, 4321],
      },
      {
        label: "Женщины",
        data: [5092, 5081, 5071, 5060, 5030],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Численность населения в Беларусь, тыс. человек",
    },
  },
  imageURL: "",
};
