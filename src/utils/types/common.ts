import type { Action } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { AppState } from '../../redux/reducers/reducers';

export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;
