import { PropTypes } from 'prop-types';
import React from 'react';
import { Navbar } from '../components';

const PrivateLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
export default PrivateLayout;

PrivateLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
