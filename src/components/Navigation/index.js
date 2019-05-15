import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { API_DATA_CATEGORIES } from '../../common/consts';

export default () => (
  <AppBar position="fixed" color="default">
    <Toolbar>
      {API_DATA_CATEGORIES.map(category => (
        <Button key={`nav-link-${category}`} component={({ ...props }) => <Link to={`/${category}`} {...props} />}>
          <Typography variant="h6" color="inherit">
            {category.toUpperCase()}
          </Typography>
        </Button>
      ))}
    </Toolbar>
  </AppBar>
);
