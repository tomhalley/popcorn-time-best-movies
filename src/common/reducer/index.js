import { combineReducers } from 'redux';
import { API_DATA_CATEGORIES } from '../consts';

import filter from '../../components/Filter/reducer';
import createApiDataReducer from '../../utils/create-api-data-reducer';

export default combineReducers({
  filter,
  ...API_DATA_CATEGORIES.reduce((accumulator, mediaType) => ({
    ...accumulator,
    [mediaType]: createApiDataReducer(mediaType),
  }), {}),
});
