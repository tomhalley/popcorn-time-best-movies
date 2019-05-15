import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from '../Media';
import { requestData } from './actions';
import { MediaListContainer } from './styled';

const MediaList = ({
  type,
  onMount,
  loadMore,
  filter: {
    rating,
    genres,
  },
  media: {
    isFetching,
    error,
    data,
  },
}) => {
  useEffect(() => {
    onMount(1);
  }, [onMount]);

  const mediaItems = Object.values(data)
    .filter(media => media.rating.percentage >= rating)
    .filter(({ genres: movieGenres }) => genres.every(genre => movieGenres.indexOf(genre) !== -1));

  return (
    <MediaListContainer
      pageStart={1}
      loadMore={page => loadMore(page)}
      hasMore={!isFetching && mediaItems.length <= 200}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >
      {mediaItems.map(({
        imdb_id: imdbId, title, year, images: { poster },
      }) => (
        <Media
          key={`media-${imdbId}`}
          image={poster}
          title={title}
          year={year}
          type={type}
        />
      ))}
    </MediaListContainer>
  );
};

MediaList.propTypes = {
  type: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    rating: PropTypes.number.isRequired,
  }).isRequired,
  media: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.shape({}).isRequired,
    error: PropTypes.any,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  media: state[ownProps.type],
  filter: state.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount: page => dispatch(requestData(ownProps.type, page)),
  loadMore: page => dispatch(requestData(ownProps.type, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
