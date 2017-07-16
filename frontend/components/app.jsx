import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SessionFormContainer from './session_form/session_form_container';
import Page from './page/page';
import LoadingContainer from './other/loading_container';

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
          <a href="https://www.linkedin.com/in/tu-ngo/">LINKEDIN</a>
          <a href="https://tungo.net/?utm_source=instagames&utm_medium=footer">PORTFOLIO</a>
        </div>
        <div className="right">
          Tu Ngo © 2017 INSTAGAMES
        </div>
      </footer>
    </section>

    <LoadingContainer />
  </div>
);

export default App;