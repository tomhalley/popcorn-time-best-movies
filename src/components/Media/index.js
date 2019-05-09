import React from 'react';
import PropTypes from 'prop-types';
import {
  MediaCard, MediaCardImage, MediaCardTitle, MediaCardYear, MediaContainer,
} from './styled';

const Media = ({
  image, title, year,
}) => (
  <MediaContainer>
    <MediaCard>
      <MediaCardImage
        image={image}
        title={title}
      />
    </MediaCard>
    <MediaCardTitle>{title}</MediaCardTitle>
    <MediaCardYear>{year}</MediaCardYear>
  </MediaContainer>
);

Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Media;
