// eslint-disable-next-line
import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppState } from '../redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
