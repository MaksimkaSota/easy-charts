// eslint-disable-next-line
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppState } from '../redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
