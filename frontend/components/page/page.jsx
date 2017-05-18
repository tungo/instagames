import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import FeedContainer from './feed/feed_container';

class Page extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />

        <Switch>
          <Route exact path="/" component={FeedContainer} />
        </Switch>
      </div>
    );
  }
}

export default Page;