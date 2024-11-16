import type { Action } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { AppState } from '../../redux/reducers/reducers';

export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;

export type ObjectType<T = any> = { [field: string]: T };

export type Nullable<T> = T | null;

export type ErrorType = { message: string; code?: number };
