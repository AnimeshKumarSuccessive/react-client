import { CssBaseline } from '@mui/material';
import React from 'react';
import Login from './pages/Login';
import { Trainee } from './pages';
import { Navbar } from './pages/Components';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Navbar />
        <br />
        <Trainee />
        <Login />
      </CssBaseline>
    </div>
  );
}

export default App;
