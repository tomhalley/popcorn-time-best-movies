import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { SliderLabel } from '../Filter/styled';

const FilterRating = ({ value, onChange }) => {
  const [ratingInternal, setRatingInternal] = useState(value);

  const handleRatingChange = (event, sliderValue) => setRatingInternal(sliderValue);

  const handleRatingChangeEnd = () => onChange(ratingInternal);

  return (
    <Fragment>
      <Slider
        step={1}
        min={0}
        max={100}
        value={Number.parseFloat(ratingInternal)}
        onDragEnd={handleRatingChangeEnd}
        onChange={handleRatingChange}
      />
      <SliderLabel>
        <Typography variant="subtitle1" color="inherit">
          {ratingInternal}
        </Typography>
      </SliderLabel>
    </Fragment>
  );
};

FilterRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterRating;
