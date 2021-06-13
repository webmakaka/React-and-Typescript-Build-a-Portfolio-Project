import { EActionType } from 'state/action-types';
import { TAction } from 'state/actions';

interface IRepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: IRepositoryState = initialState,
  action: TAction
): IRepositoryState => {
  switch (action.type) {
    case EActionType.SEARCH_REPOSITIORIES:
      return { loading: true, error: null, data: [] };
    case EActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case EActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
