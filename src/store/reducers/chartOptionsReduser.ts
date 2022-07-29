import { initialValue } from "../../initialValue/initialValue";

import {
  OptionsAction,
  OptionsActionType,
  OptionsState,
} from "../types/chartOptions";

const initialState: OptionsState = {
  options: initialValue,
};

export const optionsReducer = (
  state = initialState,
  action: OptionsAction
): OptionsState => {
  switch (action.type) {
    case OptionsActionType.SET_TITLE_CHART:
      return {
        options: {
          ...state.options,
          options: {
            title: {
              display: state.options.options.title.display,
              text: action.payload,
            },
          },
        },
      };
    case OptionsActionType.SET_TYPE:
      return {
        options: {
          ...state.options,
          type: action.payload,
        },
      };
    case OptionsActionType.SET_OPTIONS_LABELS:
      const newLabels = state.options.data.labels.map((label, index) => {
        return action.payload.id === index ? action.payload.value : label;
      });
      return {
        options: {
          ...state.options,
          data: {
            labels: newLabels,
            datasets: state.options.data.datasets,
          },
        },
      };
    case OptionsActionType.SET_OPTIONS_DATA:
      const datasets = state.options.data.datasets.map((item, index) => {
        return action.payload.idDataset === index
          ? {
              label: item.label,
              data: item.data.map((itemData, indexData) => {
                return action.payload.idData === indexData
                  ? action.payload.value.replace(/[^0-9.-]/g, "")
                  : itemData;
              }),
            }
          : item;
      });
      return {
        options: {
          ...state.options,
          data: {
            labels: state.options.data.labels,
            datasets: datasets,
          },
        },
      };
    case OptionsActionType.ADD_ROW:
      let num: number = 0;
      let ind: number = 0;
      state.options.data.labels.map((item, index, array) => {
        num = array.length + 1;
        ind = index + 2;
        return item;
      });
      return {
        options: {
          ...state.options,
          data: {
            labels: [...state.options.data.labels, `Строка ${num}`],
            datasets: [
              ...state.options.data.datasets.map((item, index) => {
                return {
                  label: state.options.data.datasets[index].label,
                  data: [...state.options.data.datasets[index].data, ind],
                };
              }),
            ],
          },
        },
      };
    case OptionsActionType.ADD_COLUMN:
      let ind1: number = 0;
      state.options.data.datasets.map((item, index) => {
        ind1 = index + 2;
      });
      const data = state.options.data.datasets[0].data;
      const object = {
        label: `Заголовок ${ind1}`,
        data: [...data], // [...data]
      };
      return {
        options: {
          ...state.options,
          data: {
            labels: state.options.data.labels,
            datasets: [...state.options.data.datasets, object],
          },
        },
      };
    case OptionsActionType.SET_LABEL_IN_DATA:
      return {
        options: {
          ...state.options,
          data: {
            labels: state.options.data.labels,
            datasets: [
              ...state.options.data.datasets.map((item, index) => {
                return {
                  label:
                    action.payload.id === index
                      ? action.payload.value
                      : state.options.data.datasets[index].label,
                  data: state.options.data.datasets[index].data,
                };
              }),
            ],
          },
        },
      };
    case OptionsActionType.REMOVE_ROW:
      const newLebels = state.options.data.labels.filter((item, index) => {
        if (index !== action.payload) {
          return item;
        }
      });
      return {
        options: {
          ...state.options,
          data: {
            labels: newLebels,
            datasets: [
              ...state.options.data.datasets.map((item, index) => {
                return {
                  label: state.options.data.datasets[index].label,
                  data: state.options.data.datasets[index].data.filter(
                    (item, index) => {
                      if (index !== action.payload) {
                        return item;
                      }
                    }
                  ),
                };
              }),
            ],
          },
        },
      };
    case OptionsActionType.REMOVE_COLUMN:
      const newDatasets =
        state.options.data.datasets.length !== 1
          ? state.options.data.datasets.filter((item, index) => {
              if (index !== action.payload) {
                return item;
              }
            })
          : state.options.data.datasets;
      return {
        options: {
          ...state.options,
          data: {
            labels: state.options.data.labels,
            datasets: newDatasets,
          },
        },
      };
    case OptionsActionType.GET_NEW_OPTIONS:
      return {
        options: action.payload,
      };
    default:
      return state;
  }
};
