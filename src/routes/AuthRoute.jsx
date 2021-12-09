import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../Layouts/AuthLayout';

const AuthRoute = ({
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
      <AuthLayout>
        <Component match={match} history={history} location={location} />
      </AuthLayout>
    )}
  />
);

export default AuthRoute;

AuthRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
