import { IChart } from "../IChart";

export const exampleValueFirst: IChart = {
  type: "bar",
  data: {
    labels: [
      "Китай",
      "Индия",
      "США",
      "Индонезия",
      "Пакистан",
      "Бразилия",
      "Нигерия",
      "Бангладеш",
      "Россия",
      "Мексика",
    ],
    datasets: [
      {
        label: "Численность населения в странах мира 2020, млн",
        data: [1439, 1380, 331, 274, 221, 213, 206, 165, 146, 129],
      },
    ],
  },
  imageURL: "",
};
