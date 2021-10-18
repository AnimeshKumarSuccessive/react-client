import * as React from 'react';
import PropTypes from 'prop-types';
import { input, error, errorBorder } from './style';

const TextField = (props) => {
  const {
    label, value, errorMessage, disabled, onChange,
  } = props;

  return (
    <>
      <label htmlFor>
        <b>{label}</b>
        <input onChange={onChange} name="inputText" style={errorMessage ? errorBorder : input} type="text" value={value} disabled={disabled} />
      </label>
      <div style={error}>{errorMessage}</div>
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default TextField;
