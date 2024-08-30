import { useMemo } from 'react';
// eslint-disable-next-line
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/actions/actions';
import { thunkCreators } from '../redux/thunks/thunks';

const creators = { ...actionCreators, ...thunkCreators };

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(creators, dispatch), [dispatch]);
};
