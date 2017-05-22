import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import EditFormContainer from './edit_form_container';
import PasswordFormContainer from './password_form_container';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="account-page">
        <article>
          <ul className="sidebar">
            <li>
              <NavLink
                to="/account/edit"
                activeClassName="selected"
              >Edit Profile</NavLink>
            </li>
            <li>
              <NavLink
                to="/account/password"
                activeClassName="selected"
              >Change Password</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/account/edit" component={EditFormContainer} />
            <Route path="/account/password" component={PasswordFormContainer} />
          </Switch>
        </article>
      </main>
    );
  }
}

export default Account;