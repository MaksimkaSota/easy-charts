import { v4 as uuidv4 } from 'uuid';
import { type MainOptionsAction, MainOptionsActionType, type MainOptionsState } from '../types/mainOptions';
import { mainInitialValue } from '../../utils/initialValues/mainInitialValue';
import type { IData, IDataset } from '../../utils/types/api';
import { StandardOptions } from '../../utils/types/enums';
import { addUniqueIdInObjects } from '../../utils/helpers/servicesHelpers';

const initialState: MainOptionsState = {
  mainOptions: mainInitialValue,
  width: StandardOptions.Width,
  height: StandardOptions.Height,
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
      const newLabels = state.mainOptions.data.labels.map((label: IData, labelIndex: number): IData => {
        return {
          value: action.payload.id === labelIndex ? action.payload.value : label.value,
          id: label.id,
        };
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
              data: dataset.data.map(
                (dataItem: IData, dataIndex: number): IData => ({
                  value: action.payload.dataId === dataIndex ? action.payload.value : dataItem.value,
                  id: dataItem.id,
                })
              ),
              id: dataset.id,
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
              id: dataset.id,
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
          data: [...dataset.data, { value: rowNumber, id: uuidv4() }],
          id: dataset.id,
        };
      });
      return {
        ...state,
        mainOptions: {
          ...state.mainOptions,
          data: {
            ...state.mainOptions.data,
            labels: [...state.mainOptions.data.labels, { value: `Строка ${rowNumber}`, id: uuidv4() }],
            datasets: newDatasets,
          },
        },
      };
    }
    case MainOptionsActionType.ADD_MAIN_OPTIONS_COLUMN: {
      const columnNumber: number = state.mainOptions.data.datasets.length + 1;
      const columnIndex: number = state.mainOptions.data.datasets.length - 1;
      const newDataset: IDataset = {
        label: `Заголовок ${columnNumber}`,
        data: state.mainOptions.data.datasets[columnIndex].data,
        id: uuidv4(),
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
      const newLabels = state.mainOptions.data.labels.filter((label, labelIndex: number): boolean => {
        return action.payload !== labelIndex;
      });
      const newDatasets = state.mainOptions.data.datasets.map((dataset: IDataset): IDataset => {
        return {
          label: dataset.label,
          data:
            dataset.data.length === 1
              ? dataset.data
              : dataset.data.filter((dataItem, dataIndex: number): boolean => action.payload !== dataIndex),
          id: dataset.id,
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
      const newDatasets = state.mainOptions.data.datasets.filter((dataset, datasetIndex: number): boolean => {
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
    case MainOptionsActionType.SET_NEW_MAIN_OPTIONS_WITH_ID: {
      const labelsWithId = addUniqueIdInObjects(action.payload.data.labels);
      const datasetsWithDataWithId = action.payload.data.datasets.map((dataset: IDataset): IDataset => {
        return {
          label: dataset.label,
          data: addUniqueIdInObjects(dataset.data),
        };
      });
      const datasetsWithId = addUniqueIdInObjects(datasetsWithDataWithId);

      const newMainOptionsWithId = {
        ...action.payload,
        data: {
          labels: labelsWithId,
          datasets: datasetsWithId,
        },
      };
      return {
        ...state,
        mainOptions: newMainOptionsWithId,
      };
    }
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
