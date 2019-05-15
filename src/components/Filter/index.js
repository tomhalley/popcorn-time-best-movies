import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import FilterGenres from '../FilterGenres';
import MediaTypeContext from '../../common/contexts/media-type';

import FilterRating from '../FilterRating';
import { setFilterGenres, setFilterRating } from './actions';
import { API_DATA_GENRES } from '../../common/consts';

const Filter = ({
  rating,
  selectedGenres,
  onRatingUpdate,
  onGenreUpdate,
}) => (
  <Fragment>
    <List subheader={<ListSubheader component="div">Rating</ListSubheader>}>
      <ListItem>
        <FilterRating onChange={onRatingUpdate} value={rating} />
      </ListItem>
    </List>
    <MediaTypeContext.Consumer>
      {mediaType => (
        <List>
          <ListItem>
            <FilterGenres
              selectedValues={selectedGenres}
              genres={API_DATA_GENRES[mediaType]}
              onChange={onGenreUpdate}
            />
          </ListItem>
        </List>
      )}
    </MediaTypeContext.Consumer>
  </Fragment>
);

Filter.propTypes = {
  rating: PropTypes.number.isRequired,
  selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRatingUpdate: PropTypes.func.isRequired,
  onGenreUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter: { rating, genres } }) => ({
  rating,
  selectedGenres: genres,
});

const mapDispatchToProps = dispatch => ({
  onRatingUpdate: rating => dispatch(setFilterRating(rating)),
  onGenreUpdate: genres => dispatch(setFilterGenres(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
