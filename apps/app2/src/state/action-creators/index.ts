import axios from 'axios';
import { Dispatch } from 'redux';
import { EActionType } from 'state/action-types';
import { TAction } from 'state/actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    dispatch({
      type: EActionType.SEARCH_REPOSITIORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: { text: term },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: EActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: EActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
