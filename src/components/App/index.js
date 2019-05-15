import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation';
import SideBar from '../SideBar';
import MediaList from '../MediaList';
import { API_DATA_CATEGORIES } from '../../common/consts';
import { Main } from './styled';
import MediaTypeContext from '../../common/contexts/media-type';

export default () => (
  <Fragment>
    <Navigation />
    <Main>
      <SideBar />
      {API_DATA_CATEGORIES.map(category => (
        <Route
          key={`route-${category}`}
          exact
          path={`/${category}`}
          component={routeProps => (
            <MediaTypeContext.Provider value={category}>
              <MediaList type={category} {...routeProps} />
            </MediaTypeContext.Provider>
          )}
        />
      ))}
    </Main>
  </Fragment>
);
