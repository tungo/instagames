import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import EditContainer from './edit/edit_container';

class Page extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />

        <Switch>
          <Route path="/edit" component={EditContainer} />
          <Route path="/user/:userId" component={ProfileContainer} />
          <Route exact path="/" component={FeedContainer} />
        </Switch>
      </div>
    );
  }
}

export default Page;