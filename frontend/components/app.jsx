import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SessionFormContainer from './session_form/session_form_container';
import Page from './page/page';

const App = () => (
  <div>
    <section className="main-content">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />

        <ProtectedRoute path="/" component={Page} />
      </Switch>
    </section>

    <section className="main-footer">
      <footer>
        <div className="left">
          <a href="https://github.com/tungo">GITHUB</a>
          <a href="https://tungo.net">PORTFOLIO</a>
          <a href="https://www.linkedin.com/in/tu-ngo/">LINKEDIN</a>
        </div>
        <div className="right">
          2017 © Tu Ngo
        </div>
      </footer>
    </section>
  </div>
);

export default App;