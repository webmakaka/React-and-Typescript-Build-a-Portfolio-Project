interface IRepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface ISearchRepositoriesAction {
  type: EActionType.SEARCH_REPOSITIORIES;
}

interface ISearchRepositoriesSuccessAction {
  type: EActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface ISearchRepositoriesErrorAction {
  type: EActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type TAction =
  | ISearchRepositoriesAction
  | ISearchRepositoriesSuccessAction
  | ISearchRepositoriesErrorAction;

enum EActionType {
  SEARCH_REPOSITIORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (
  state: IRepositoryState,
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
