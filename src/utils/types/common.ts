import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../redux/reducers/reducers';

export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;
