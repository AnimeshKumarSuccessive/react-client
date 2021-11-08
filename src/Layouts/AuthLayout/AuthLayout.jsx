import { PropTypes } from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';

const AuthLayout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);
export default AuthLayout;
AuthLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
