import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './theme';
import { ChildrenDemo } from './pages/ChildrenDemo';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Typography>
        <ChildrenDemo />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
