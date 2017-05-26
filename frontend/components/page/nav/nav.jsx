import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import UploadModal from './upload_modal';
import SearchFormContainer from './search_form_container';
import ConfirmModal from '../../other/confirm_modal';

class Nav extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      logoutConfirming: false
    };

    this.openLogoutConfirm = this.openLogoutConfirm.bind(this);
    this.closeLogoutConfirm = this.closeLogoutConfirm.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  openLogoutConfirm() {
    this.setState({logoutConfirming: true});
  }

  closeLogoutConfirm() {
    this.setState({logoutConfirming: false});
  }

  handleLogout(e) {
    e.preventDefault();

    this.props.logout()
      .then(() => this.setState({ redirect: true }));

    this.closeLogoutConfirm();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <section className="nav-bar">
        <nav>
          <div className="logo">
            <Link to="/" className="link">
              <div id="image-logo-nav">
              </div>
              <div className="separator"></div>
              <div className="name">Instagames</div>
            </Link>
          </div>

          <SearchFormContainer />

          <div className="utils">
              <UploadModal />
              <div>
                <Link to={`/user/${this.props.currentUser.username}`}>
                  <i className="fa fa-user-o"></i>
                </Link>
              </div>

              <div>
                <button onClick={this.openLogoutConfirm} className="button-link">
                  <i className="fa fa-sign-out"></i>
                </button>

                <ConfirmModal
                  confirmOpen={this.state.logoutConfirming}
                  confirmText="Log Out"
                  closeConfirm={this.closeLogoutConfirm}
                  handleConfirm={this.handleLogout}
                />
              </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Nav;