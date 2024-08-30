import type { MainOptionsAction, MainOptionsState } from '../types/mainOptions';
import { MainOptionsActionType } from '../types/mainOptions';
import { mainInitialValue } from '../../utils/initialValues/mainInitialValue';
import type { IDataset } from '../../utils/types/api';

const initialState: MainOptionsState = {
  mainOptions: mainInitialValue,
  width: 800,
  height: 400,
};

export const mainOptionsReducer = (
  state: MainOptionsState = initialState,
  action: MainOptionsAction
): MainOptionsState => {
  switch (action.type) {
    case MainOptionsActionType.SET_MAIN_OPTIONS_TITLE:
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          options: {
            ...state.mainOptions.options,
            title: {
              ...state.mainOptions.options.title,
              text: action.payload,
            },
          },
        },
      };
    case MainOptionsActionType.SET_MAIN_OPTIONS_LABELS: {
      const newLabels = state.mainOptions.data.labels.map((label: string, labelIndex: number): string => {
        return action.payload.id === labelIndex ? action.payload.value : label;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            labels: newLabels,
          },
        },
      };
    }
    case MainOptionsActionType.SET_MAIN_OPTIONS_DATA_IN_DATASETS: {
      const newDatasets = state.mainOptions.data.datasets.map((dataset: IDataset, datasetIndex: number): IDataset => {
        return action.payload.datasetId === datasetIndex
          ? {
              label: dataset.label,
              data: dataset.data.map((dataItem: number, dataIndex: number): number =>
                action.payload.dataId === dataIndex ? +action.payload.value.replace(/[^0-9.-]/g, '') : dataItem
              ),
            }
          : dataset;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            datasets: newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.SET_MAIN_OPTIONS_LABEL_IN_DATASETS: {
      const newDatasets = state.mainOptions.data.datasets.map((dataset: IDataset, datasetIndex: number): IDataset => {
        return action.payload.id === datasetIndex
          ? {
              label: action.payload.value,
              data: dataset.data,
            }
          : dataset;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            datasets: newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.SET_MAIN_OPTIONS_TYPE:
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          type: action.payload,
        },
      };
    case MainOptionsActionType.ADD_MAIN_OPTIONS_ROW: {
      const rowNumber: number = state.mainOptions.data.labels.length + 1;
      const newDatasets = state.mainOptions.data.datasets.map((dataset: IDataset): IDataset => {
        return {
          label: dataset.label,
          data: [...dataset.data, rowNumber],
        };
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            labels: [...state.mainOptions.data.labels, `Строка ${rowNumber}`],
            datasets: newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.ADD_MAIN_OPTIONS_COLUMN: {
      const columnNumber: number = state.mainOptions.data.datasets.length + 1;
      const newDataset: IDataset = {
        label: `Заголовок ${columnNumber}`,
        data: state.mainOptions.data.datasets[0].data,
      };
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            datasets: [...state.mainOptions.data.datasets, newDataset],
          },
        },
      };
    }
    case MainOptionsActionType.REMOVE_MAIN_OPTIONS_ROW: {
      const newLabels = state.mainOptions.data.labels.filter((label: string, labelIndex: number): boolean => {
        return action.payload !== labelIndex;
      });
      const newDatasets = state.mainOptions.data.datasets.map((dataset: IDataset): IDataset => {
        return {
          label: dataset.label,
          data:
            dataset.data.length === 1
              ? dataset.data
              : dataset.data.filter((dataItem: number, dataIndex: number): boolean => action.payload !== dataIndex),
        };
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            labels: state.mainOptions.data.labels.length === 1 ? state.mainOptions.data.labels : newLabels,
            datasets: newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.REMOVE_MAIN_OPTIONS_COLUMN: {
      const newDatasets = state.mainOptions.data.datasets.filter((dataset: IDataset, datasetIndex: number): boolean => {
        return action.payload !== datasetIndex;
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            datasets: state.mainOptions.data.datasets.length === 1 ? state.mainOptions.data.datasets : newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.SET_NEW_MAIN_OPTIONS:
      return {
        ...state,
        mainOptions: action.payload,
      };
    case MainOptionsActionType.SET_MAIN_OPTIONS_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case MainOptionsActionType.SET_MAIN_OPTIONS_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    default:
      return state;
  }
};
