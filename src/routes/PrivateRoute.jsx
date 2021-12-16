/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Layouts';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    // NOTE: render method use to inline rendering
    // REF: https://reactrouter.com/web/api/Route
    render={(matchProps) => (
      // matchProps = (match,hisory,location)
      <Layout.PrivateLayout>
        <Component {...matchProps} />
      </Layout.PrivateLayout>
    )}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.objectOf.isRequired,
};
