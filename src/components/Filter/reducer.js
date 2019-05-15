export const FILTER_RATING_UPDATED = 'FILTER_RATING_UPDATED';
export const FILTER_GENRES_UPDATED = 'FILTER_GENRES_UPDATED';

export default function filter(state = {}, { type, payload }) {
  switch (type) {
    case FILTER_RATING_UPDATED:
      return {
        ...state,
        rating: payload,
      };
    case FILTER_GENRES_UPDATED:
      return {
        ...state,
        genres: payload,
      };
    default:
      return state;
  }
}
