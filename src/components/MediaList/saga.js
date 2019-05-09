import {
  all, call, put, fork, takeEvery, select,
} from 'redux-saga/effects';
import { receiveData, receiveDataFail } from './actions';
import { getDataByPage } from '../../common/api';

const createMediaListSaga = (dataName) => {
  function* getData() {
    try {
      const page = yield select(state => state[dataName].page);

      const data = yield call(getDataByPage, dataName, page);
      yield put(receiveData(dataName, data));
    } catch (error) {
      yield put(receiveDataFail(dataName, error));
    }
  }

  return function* dataFetched() {
    yield takeEvery(`REQUEST_${dataName.toUpperCase()}`, getData);
  };
};

export default function* rootSaga() {
  yield all([
    fork(createMediaListSaga('shows')),
    fork(createMediaListSaga('movies')),
    fork(createMediaListSaga('animes')),
  ]);
}
