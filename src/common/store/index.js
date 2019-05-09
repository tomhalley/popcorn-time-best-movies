import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../../components/MediaList/saga';
import { API_DATA_CATEGORIES } from '../consts';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

const AppStore = createStore(
  rootReducer, {
    filter: {
      minimumRating: 0,
    },
    ...API_DATA_CATEGORIES.reduce((object, dataCategory) => ({
      ...object,
      [dataCategory]: {
        isFetching: false,
        error: false,
        page: 0,
        data: {},
      },
    }), {}),
  },
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export default AppStore;
