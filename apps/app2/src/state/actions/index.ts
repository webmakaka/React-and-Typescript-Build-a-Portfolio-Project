import { EActionType } from 'state/action-types';

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

export type TAction =
  | ISearchRepositoriesAction
  | ISearchRepositoriesSuccessAction
  | ISearchRepositoriesErrorAction;
