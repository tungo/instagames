import React from 'react';
import merge from 'lodash/merge';

import AvatarModal from '../profile/avatar_modal';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      bio: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { currentUser, fetchUser, user } = this.props;
    if (currentUser.username !== user.username) {
      fetchUser(currentUser.username)
        .then((rspUser) => this.updateUser(rspUser));
    } else {
      this.updateUser(user);
    }
  }

  updateUser(user) {
    const nextState = merge({}, user);

    Object.keys(nextState).forEach((key) => {
      if (nextState[key] === null) {
        delete nextState[key];
      }
    });

    this.setState(nextState);
  }

  updateInput(name) {
    return (e) => {
      e.preventDefault();

      this.setState({[name]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateUser({user: this.state});
  }

  render() {
    const { user } = this.props;

    return (
      <article className="edit-form">
        <header>
          <div className="avatar left">
            <AvatarModal user={user} />
          </div>
          <div className="username">
            <h1>{user.username}</h1>
          </div>
        </header>

        <main>
          <div className="input">
            <label className="left">Name</label>
            <input
              type="text"
              className="white-input"
              value={this.state.name}
              onChange={this.updateInput('name')}
            />
          </div>

          <div className="input">
            <label className="left">Username</label>
            <input
              type="text"
              className="white-input"
              value={this.state.username}
              onChange={this.updateInput('username')}
            />
          </div>

          <div className="input">
            <label className="left">Bio</label>
            <textarea
              className="white-input"
              value={this.state.bio}
              onChange={this.updateInput('bio')}
            />
          </div>

          <div className="input">
            <div className="left"></div>
            <button
              className="blue-button"
              onClick={this.handleSubmit}
            >Submit</button>
          </div>
        </main>
      </article>
    );
  }
}

export default EditForm;