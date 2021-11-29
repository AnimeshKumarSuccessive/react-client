/* eslint-disable no-console */
import * as React from 'react';
import PropTypes from 'prop-types';
import { input, error, errorBorder } from './style';

const TextField = (props) => {
  const {
    label, value, errorMessage, disabled, onChange, onBlur,
  } = props;
  console.log(props);
  return (
    <>
      <label htmlFor>
        <b>{label}</b>
        <input onBlur={onBlur} onChange={onChange} name="inputText" style={errorMessage ? errorBorder : input} type="text" value={value} disabled={disabled} />
      </label>
      <div style={error}>{errorMessage}</div>
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  value: '',
  errorMessage: '',
};

export default TextField;
