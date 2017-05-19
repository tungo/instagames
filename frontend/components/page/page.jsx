import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import Account from './account/account';

class Page extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />

        <Switch>
          <Route path="/account/:formType" component={Account} />
          <Route path="/user/:userId" component={ProfileContainer} />
          <Route exact path="/" component={FeedContainer} />
        </Switch>
      </div>
    );
  }
}

export default Page;