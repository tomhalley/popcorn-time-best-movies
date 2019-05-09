import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation';
import MediaList from '../MediaList';
import { API_DATA_CATEGORIES } from '../../common/consts';

export default () => (
  <Fragment>
    <Navigation />
    {API_DATA_CATEGORIES.map(category => (
      <Route
        key={`route-${category}`}
        exact
        path={`/${category}`}
        component={routeProps => (
          <MediaList type={category} {...routeProps} />
        )}
      />
    ))}
  </Fragment>
);
