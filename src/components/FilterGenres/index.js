import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { GenresFormControl } from './styled';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FilterGenres = ({ selectedValues, genres, onChange }) => {
  const handleGenreChange = ({ target: { value } }) => onChange(value);

  return (
    <GenresFormControl>
      <InputLabel htmlFor="select-multiple">Genres</InputLabel>
      <Select
        multiple
        value={selectedValues}
        onChange={handleGenreChange}
        input={<Input id="select-multiple" />}
        MenuProps={MenuProps}
      >
        {genres.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </GenresFormControl>
  );
};

FilterGenres.propTypes = {
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterGenres;
