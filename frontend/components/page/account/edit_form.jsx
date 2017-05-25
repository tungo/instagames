import React from 'react';

import AvatarModal from '../profile/avatar_modal';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      bio: '',
      success: false,
      submiting: false
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { currentUser, fetchUser, user } = this.props;
    if (currentUser.username !== user.username) {
      fetchUser(currentUser.username)
        .then((rspUser) => this.setState(rspUser));
    } else {
      this.setState(user);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateInput(name) {
    return (e) => {
      e.preventDefault();

      this.setState({[name]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submiting: true, success: false});
    this.props.clearErrors();

    const { name, username, bio } = this.state;
    this.props.updateProfile({
      name,
      username,
      bio,
      updateType: 'edit'
    }).then(() => this.setState({success: true}))
      .always(() => this.setState({submiting: false}));
  }

  renderErrors() {
    const { errors } = this.props;

    if (errors.length < 1) {
      return;
    }

    const content = errors.map((err, i) => <li key={i}>{err}</li>);
    return (
      <div className="input">
        <div className="left"></div>
        <ul className="errors">
          {content}
        </ul>
      </div>
    );
  }

  render() {
    const { user } = this.props;

    let success = '';
    if (this.state.success) {
      success = <div className="input">
        <div className="left"></div>
        <div className="success">Profile updated!</div>
      </div>;
    }

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

        <form>
          {this.renderErrors()}

          <div className="input">
            <label className="left">Name</label>
            <div className="right">
              <input
                type="text"
                className="white-input"
                value={this.state.name}
                onChange={this.updateInput('name')}
              />
            </div>
          </div>

          <div className="input">
            <label className="left">Username</label>
            <div className="right">
              <input
                type="text"
                className="white-input"
                value={this.state.username}
                onChange={this.updateInput('username')}
              />
            </div>
          </div>

          <div className="input">
            <label className="left">Bio</label>
            <div className="right">
              <textarea
                className="white-input"
                value={this.state.bio}
                onChange={this.updateInput('bio')}
              />
            </div>
          </div>

          <div className="input">
            <div className="left"></div>
            <div className="right">
              <button
                type="submit"
                className="blue-button"
                onClick={this.handleSubmit}
                disabled={this.state.submiting}
              >Submit</button>
            </div>
          </div>

          {success}
        </form>
      </article>
    );
  }
}

export default EditForm;