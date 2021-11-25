export const calculator = ({ first, second, operator }) => {
  switch (operator) {
  case '+':
    return first + second;
  case '-':
    return first - second;
  case '/':
    return first / second;
  case '*':
    return first * second;
  default:
    return 'Invalid Operation';
  }
};
