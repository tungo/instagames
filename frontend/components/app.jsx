import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute} from '../util/route_util.jsx';

import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <h1>Instagames</h1>

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;