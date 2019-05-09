import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Media from '../Media';
import { requestData } from './actions';
import { MediaListContainer } from './styled';

const MediaList = ({
  type,
  onMount,
  loadMore,
  media: {
    isFetching,
    error,
    data,
  },
}) => {
  useEffect(() => {
    onMount(1);
  }, [onMount]);

  return (
    <MediaListContainer>
      {Object.values(data).map(({
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
      {/* <InfiniteScroll */}
      {/*  pageStart={0} */}
      {/*  loadMore={page => loadMore(page)} */}
      {/*  hasMore={!isFetching && data} */}
      {/*  loader={<div className="loader" key={0}>Loading ...</div>} */}
      {/* > */}
      {/*  {Object.values(data).map(media => ( */}
      {/*    <Media data={media} key={`media-${media.imdb_id}`} /> */}
      {/*  ))} */}
      {/* </InfiniteScroll> */}
    </MediaListContainer>
  );
};

MediaList.propTypes = {
  onMount: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  media: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.shape({}).isRequired,
    error: PropTypes.any,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  media: state[ownProps.type],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMount: page => dispatch(requestData(ownProps.type, page)),
  loadMore: page => dispatch(requestData(ownProps.type, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
