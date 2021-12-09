import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Math from '../../components/Math';
import Theme from '../../theme';

const ChildrenDemo = () => (
  <>
    <ThemeProvider theme={Theme}>
      <pre>
        <Math first={7} second={4} operator="+" />

      </pre>

      <pre>
        <Math first={7} second={3} operator="-" />

      </pre>
      <pre>
        <Math first={7} second={20} operator="*" />

      </pre>
      <pre>
        <Math first={7} second={0} operator="/" />

      </pre>
      <pre>
        <Math first={7} second={8} operator="^" />

      </pre>
      <pre>
        <Math first={7} second={4} operator="+">
          {
            (first, second, result) => (
              `Sum of  ${first} and  ${second}  is equal to  ${result}`
            )
          }
        </Math>
      </pre>
      <pre>
        <Math first={3} second={4} operator="+">
          {
            (first, second, result) => (
              `When We add  ${first} with ${second}  then will get  ${result}  as result`
            )
          }
        </Math>
      </pre>
    </ThemeProvider>
  </>
);

export default ChildrenDemo;
