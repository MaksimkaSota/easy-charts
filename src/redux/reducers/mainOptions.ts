import { MainOptionsState, MainOptionsActionType, MainOptionsAction } from '../types/mainOptions';
import { mainInitialValue } from '../../utils/initialValues/mainInitialValue';

const initialState: MainOptionsState = {
  mainOptions: mainInitialValue,
  width: 800,
  height: 400,
};

export const mainOptionsReducer = (state: MainOptionsState = initialState, action: MainOptionsAction): MainOptionsState => {
  switch (action.type) {
    case MainOptionsActionType.SET_OPTIONS_TITLE:
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          options: {
            title: {
              display: state.mainOptions.options.title.display,
              text: action.payload,
            },
          },
        },
      };
    case MainOptionsActionType.SET_OPTIONS_LABELS:
      const newLabels = state.mainOptions.data.labels.map((label, index) => {
        return action.payload.id === index ? action.payload.value : label;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: newLabels,
            datasets: state.mainOptions.data.datasets,
          },
        },
      };
    case MainOptionsActionType.SET_OPTIONS_DATA:
      const datasets = state.mainOptions.data.datasets.map((item, index) => {
        return action.payload.idDataset === index
          ? {
            label: item.label,
            data: item.data.map((itemData, indexData) => {
              return action.payload.idData === indexData
                ? action.payload.value.replace(/[^0-9.-]/g, '')
                : itemData;
            }),
          }
          : item;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: state.mainOptions.data.labels,
            datasets: datasets,
          },
        },
      };
    case MainOptionsActionType.SET_OPTIONS_LABEL_IN_DATA:
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: state.mainOptions.data.labels,
            datasets: [
              ...state.mainOptions.data.datasets.map((item, index) => {
                return {
                  label:
                    action.payload.id === index
                      ? action.payload.value
                      : state.mainOptions.data.datasets[index].label,
                  data: state.mainOptions.data.datasets[index].data,
                };
              }),
            ],
          },
        },
      };
    case MainOptionsActionType.SET_OPTIONS_TYPE:
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          type: action.payload,
        },
      };
    case MainOptionsActionType.ADD_OPTIONS_ROW:
      let num: number = 0;
      let ind: number = 0;
      state.mainOptions.data.labels.map((item, index, array) => {
        num = array.length + 1;
        ind = index + 2;
        return item;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: [...state.mainOptions.data.labels, `Строка ${num}`],
            datasets: [
              ...state.mainOptions.data.datasets.map((item, index) => {
                return {
                  label: state.mainOptions.data.datasets[index].label,
                  data: [...state.mainOptions.data.datasets[index].data, ind],
                };
              }),
            ],
          },
        },
      };
    case MainOptionsActionType.ADD_OPTIONS_COLUMN:
      let ind1: number = 0;
      state.mainOptions.data.datasets.map((item, index) => {
        ind1 = index + 2;
      });
      const data = state.mainOptions.data.datasets[0].data;
      const object = {
        label: `Заголовок ${ind1}`,
        data: [...data], // [...data]
      };
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: state.mainOptions.data.labels,
            datasets: [...state.mainOptions.data.datasets, object],
          },
        },
      };
    case MainOptionsActionType.REMOVE_OPTIONS_ROW:
      const newLebels = state.mainOptions.data.labels.filter((item, index) => {
        if (index !== action.payload) {
          return item;
        }
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: newLebels,
            datasets: [
              ...state.mainOptions.data.datasets.map((item, index) => {
                return {
                  label: state.mainOptions.data.datasets[index].label,
                  data: state.mainOptions.data.datasets[index].data.filter(
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
    case MainOptionsActionType.REMOVE_OPTIONS_COLUMN:
      const newDatasets =
        state.mainOptions.data.datasets.length !== 1
          ? state.mainOptions.data.datasets.filter((item, index) => {
            if (index !== action.payload) {
              return item;
            }
          })
          : state.mainOptions.data.datasets;
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            labels: state.mainOptions.data.labels,
            datasets: newDatasets,
          },
        },
      };
    case MainOptionsActionType.SET_NEW_OPTIONS:
      return {
        ...state,
        mainOptions: action.payload,
      };
    case MainOptionsActionType.SET_OPTIONS_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case MainOptionsActionType.SET_OPTIONS_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    default:
      return state;
  }
};
