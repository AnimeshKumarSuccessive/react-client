import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  Trainee, Login, TextFieldDemo, ChildrenDemo, InputDemo, NotFound,
} from './pages';
import AuthRoute from './routes/AuthRoute';
import { PrivateRoute } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Trainee} />
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/trainee" component={Trainee} />
          <PrivateRoute exact path="/childrendemo" component={ChildrenDemo} />
          <PrivateRoute exact path="/textfielddemo" component={TextFieldDemo} />
          <PrivateRoute exact path="/inputdemo" component={InputDemo} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
