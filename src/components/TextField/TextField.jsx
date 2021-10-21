import * as React from 'react';
import PropTypes from 'prop-types';
import { input, error, errorBorder } from './style';

const TextField = (props) => {
  const { value, errorMessage, disabled } = props;

  return (
    <div>
      <input style={errorMessage ? errorBorder : input} type="text" value={value} disabled={disabled} />
      <p style={error}>{errorMessage}</p>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};

TextField.defaultProps = {
  value: '',
  errorMessage: '',
};

export default TextField;
