import React from 'react';
import merge from 'lodash/merge';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      new_password: '',
      confirm_password: '',
      success: false
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { currentUser, fetchUser, user } = this.props;
    if (currentUser.username !== user.username) {
      fetchUser(currentUser.username);
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

    this.props.clearErrors();
    this.setState({success: false});

    const { password, new_password, confirm_password } = this.state;
    if (new_password !== confirm_password) {
      this.props.receiveErrors(['Confirm Password is not correct']);
      return;
    }

    this.props.updatePassword({
      password,
      new_password,
      confirm_password,
      updateType: 'password'
    }).then(() => this.setState({
      password: '',
      new_password: '',
      confirm_password: '',
      success: true
    }));
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
            <figure className="avatar-modal">
              <img
                src={user.avatar}
                alt={user.username}
                className="image-circle"
              />
            </figure>
          </div>

          <div className="username">
            <h1>{user.username}</h1>
          </div>
        </header>

        <main>

          {this.renderErrors()}

          <form>
            <div className="input">
              <label className="left">Old Password</label>
              <input
                type="password"
                className="white-input"
                value={this.state.password}
                onChange={this.updateInput('password')}
              />
            </div>

            <div className="input">
              <label className="left">New Password</label>
              <input
                type="password"
                className="white-input"
                value={this.state.new_password}
                onChange={this.updateInput('new_password')}
              />
            </div>

            <div className="input">
              <label className="left">Confirm Password</label>
              <input
                type="password"
                className="white-input"
                value={this.state.confirm_password}
                onChange={this.updateInput('confirm_password')}
              />
            </div>

            <div className="input">
              <div className="left"></div>
              <button
                type="submit"
                className="blue-button"
                onClick={this.handleSubmit}
              >Submit</button>
            </div>

            {success}

          </form>
        </main>
      </article>
    );
  }
}

export default PasswordForm;