import {
  FILTER_GENRES_UPDATED,
  FILTER_RATING_UPDATED,
} from './reducer';

export const setFilterRating = rating => ({
  type: FILTER_RATING_UPDATED,
  payload: rating,
});

export const setFilterGenres = genres => ({
  type: FILTER_GENRES_UPDATED,
  payload: genres,
});
