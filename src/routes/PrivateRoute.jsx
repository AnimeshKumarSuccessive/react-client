import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateLayout from '../Layouts/PrivateLayout';

const PrivateRoute = ({
  exact,
  path,
  component: Component,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(
      match,
      history,
      location,
    ) => (
      <PrivateLayout>
        <Component match={match} history={history} location={location} />
      </PrivateLayout>
    )}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
