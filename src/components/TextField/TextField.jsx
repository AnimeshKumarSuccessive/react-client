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
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  value: '',
  errorMessage: '',
};

export default TextField;
