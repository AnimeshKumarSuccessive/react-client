import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  const {
    value,
    error,
    onChange,
    options,
    onBlur,
    label,
  } = props;

  return (
    <>
      <label htmlFor>
        <b><span>{label}</span></b>
        {
          options.map((val, index) => (
            <div>
              <input type="radio" checked={value === val.value} id={`${val.value}_${index}`} value={val.value} onChange={onChange} error={error} onBlur={onBlur} />
              {val.label}
            </div>
          ))
        }
      </label>

      <p>{error}</p>
    </>
  );
};

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

RadioGroup.defaultProps = {
  error: '',
};

export default RadioGroup;
