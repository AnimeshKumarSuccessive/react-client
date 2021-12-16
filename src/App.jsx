import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import
{
  InputDemo, TextFieldDemo, Login, ChildrenDemo, NotFound, Trainee,
} from './pages';
import AuthRoute from './routes/AuthRoute';
import { PrivateRoute } from './routes';
import TraineeDetail from './pages/Trainee';
import SnackBarProvider from './contexts/SnackBarProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackBarProvider>
          <CssBaseline />
          <Switch>
            <AuthRoute exact path="/" component={Login} />
            <AuthRoute exact path="/login" component={Login} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="/trainee" component={Trainee} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="/trainee/:id" component={TraineeDetail} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="/childrendemo" component={ChildrenDemo} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="/textfielddemo" component={TextFieldDemo} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="/inputdemo" component={InputDemo} />
            <PrivateRoute token={localStorage.getItem('token')} exact path="*" component={NotFound} />
            <Redirect to="/login" />
          </Switch>
        </SnackBarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
