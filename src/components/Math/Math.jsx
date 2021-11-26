import PropTypes from 'prop-types';
import { calculator } from '../helper';

const Text = (props) => {
  const {
    first, second, operator, children,
  } = props;
  const result = calculator({ first, second, operator });

  if (children) {
    return children(first, second, result);
  }
  return `${first}  ${operator}  ${second} = ${result}`;
};

Text.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  children: PropTypes.func,
};
Text.defaultProps = {
  children: undefined,
};

export default Text;
