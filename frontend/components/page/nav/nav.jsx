import React from 'react';
import { Redirect } from 'react-router-dom';

class Nav extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  handleLogout(e) {
    e.preventDefault();

    this.props.logout()
      .then(() => this.setState({ redirect: true }));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <nav>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </nav>
    );
  }
}

export default Nav;