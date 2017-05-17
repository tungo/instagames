import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SessionFormContainer from './session_form/session_form_container';
import Page from './page/page';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />

      <ProtectedRoute path="/" component={Page} />
    </Switch>
  </div>
);

export default App;