import {combineReducers} from 'redux';
import repositoriesReducer from 'state/reducers/repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
