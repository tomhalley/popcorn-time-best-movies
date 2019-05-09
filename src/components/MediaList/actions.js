export const requestData = (dataName, page) => ({
  type: `REQUEST_${dataName.toUpperCase()}`,
  payload: page,
});

export const receiveData = (dataName, data) => ({
  type: `RECEIVE_${dataName.toUpperCase()}_SUCCESS`,
  payload: data,
});

export const receiveDataFail = (dataName, error) => ({
  type: `RECEIVE_${dataName.toUpperCase()}_FAIL`,
  payload: error,
});
