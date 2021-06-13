import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreateors } from 'state';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreateors, dispatch);
};
