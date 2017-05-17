import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="session-page">
        <div className="session-main">
          <div className="left">
            <img src="/assets/login-page-phone.png" />
          </div>

          <div className="right">
            <div className="box">
              <div className="logo">
                Instagames
              </div>

              <div className="title">
                {formTitle}
              </div>

              <form>
                <div className="form">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.updateInput('username')}
                    />
                  </div>

                  <div className="input">
                    <input
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.updateInput('password')}
                    />
                  </div>

                  <div className="input">
                    <button className="blue-button" onClick={this.handleSubmit}>{submitButton}</button>
                  </div>
                </div>
              </form>

              <div className="or-line">
                <div className="or-line-line"></div>
                <div className="or-line-or">OR</div>
                <div className="or-line-line"></div>
              </div>

              <div className="demo-login">
                <button className="blue-button">Demo Login</button>
              </div>

            </div>

            <div className="box">
              <div className="redirect">
                {redirectLink}
              </div>
            </div>
          </div>
        </div>

        <div className="session-footer">
          <div className="left">
            <a href="https://github.com/tungo">GITHUB</a>
            <a href="https://tungo.net">PORTFOLIO</a>
            <a href="https://www.linkedin.com/in/tu-ngo/">LINKEDIN</a>
          </div>
          <div className="right">
            2017 © Tu Ngo
          </div>
        </div>
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
    if (this.props.formType === 'signup') {
      content = Object.assign(content, {
        formTitle: 'Sign up to see and share your adventures with your friends',
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