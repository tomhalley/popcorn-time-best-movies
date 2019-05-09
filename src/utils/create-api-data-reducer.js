export default dataName => (state = {}, { type, payload }) => {
  switch (type) {
    case `REQUEST_${dataName.toUpperCase()}`:
      return {
        ...state,
        isFetching: true,
        page: payload,
      };
    case `RECEIVE_${dataName.toUpperCase()}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        error: false,
        page: state.page + 1,
        data: payload.reduce((accumulator, media) => {
          return {
            ...accumulator,
            [media._id]: {
              ...media,
            },
          };
        }, state.data),
      };
    case `RECEIVE_${dataName.toUpperCase()}_FAIL`:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
