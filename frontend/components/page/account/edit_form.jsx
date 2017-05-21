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

    this.setState({submiting: true});

    this.props.clearErrors();
    this.setState({success: false});

    const { name, username, bio } = this.state;
    this.props.updateUser({
      name,
      username,
      bio,
      updateType: 'edit'
    }).then(() => this.setState({
      success: true
    })).always(() => this.setState({submiting: false}));
  }

  renderErrors() {
    const { errors } = this.props;

    if (errors.length < 1) {
      return '';
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

        <main>

          {this.renderErrors()}

          <form>
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
                type="submit"
                className="blue-button"
                onClick={this.handleSubmit}
                disabled={this.state.submiting}
              >Submit</button>
            </div>
          </form>

          {success}

        </main>
      </article>
    );
  }
}

export default EditForm;