import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType !== this.props.formType) {
      this.props.clearErrors();
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  componentDidMount() {
    this.focus();
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

  handleDemoLogin(e) {
    e.preventDefault();

    this.props.demoLogin(this.state);
  }

  focus() {
    this.textInput.focus();
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors.length < 1) {
      return '';
    }

    return (
      <div className="errors">
        <ul>
          {errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  renderRedirectLink() {
    let link = <div>
      Don't have an account? <Link to="/signup" onClick={this.focus}>Sign up</Link>
    </div>;

    if (this.props.formType === 'signup') {
      link = <div>
        Have an account? <Link to="/login" onClick={this.focus}>Log in</Link>
      </div>;
    }

    return (
      <div className="box">
        <div className="redirect">
          {link}
        </div>
      </div>
    );
  }

  render() {
    const {
      formTitle,
      submitButton
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

                {this.renderErrors()}

                <div className="form">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.updateInput('username')}
                      ref={(input) => { this.textInput = input; }}
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
                    <button
                      className="blue-button"
                      onClick={this.handleSubmit}
                      tabIndex
                    >{submitButton}
                    </button>
                  </div>
                </div>
              </form>

              <div className="or-line">
                <div className="or-line-line"></div>
                <div className="or-line-or">OR</div>
                <div className="or-line-line"></div>
              </div>

              <div className="demo-login">
                <button
                  className="blue-button"
                  onClick={this.handleDemoLogin}
                  tabIndex
                >Demo Login</button>
              </div>

            </div>

            {this.renderRedirectLink()}

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
      submitButton: 'Log in'
    };

    // setup for signup form
    if (this.props.formType === 'signup') {
      content = Object.assign(content, {
        formTitle: 'Sign up to see and share your adventures with your friends',
        submitButton: 'Sign up'
      });
    }

    return content;
  }
}

export default SessionForm;