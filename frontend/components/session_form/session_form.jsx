import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(name) {
    return (e) => {
      e.preventDefault();

      this.setState({[name]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
  }

  render() {
    const {
      formTitle,
      submitButton,
      redirectLink
    } = this.formContent();

    return (
      <div>
        <div>
          {formTitle}
        </div>
        <form>
          <input
            type="text"
            value={this.state.username}
            onChange={this.updateInput('username')}
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.updateInput('password')}
          />

          <button onClick={this.handleSubmit}>{submitButton}</button>
        </form>
        {redirectLink}
      </div>
    );
  }

  // helper method to setup form content
  formContent() {
    // default value for login form
    let content = {
      formTitle: 'Login with your account',
      submitButton: 'Log in',
      redirectLink: <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    };

    // setup for signup form
    if (this.state.formType === 'signup') {
      content = Object.assign(content, {
        formTitle: 'Create new account',
        submitButton: 'Sign up',
        redirectLink: <div>
          Have an account? <Link to="/login">Log in</Link>
        </div>
      });
    }

    return content;
  }
}

export default SessionForm;