// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppState } from '../redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
