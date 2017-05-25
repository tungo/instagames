import React from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      isFocused: false
    };

    this.updateInput = this.updateInput.bind(this);
    this.clickUser = this.clickUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.focus = this.focus.bind(this);
    this.unfocus = this.unfocus.bind(this);
    this.linkOnMouseDown = this.linkOnMouseDown.bind(this);
  }

  updateInput(name) {
    return (e) => {
      e.preventDefault();

      this.setState({[name]: e.currentTarget.value});

      this.props.searchUsers(e.currentTarget.value);
    };
  }

  clickUser() {
    this.props.clearSearchUsers();
    this.setState({keyword: ''});
    scroll(0,0);
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.clearSearchUsers();
    this.setState({keyword: ''});
  }

  focus(e) {
    this.setState({isFocused: true});
  }

  unfocus(e) {
    this.setState({isFocused: false});
  }

  linkOnMouseDown(e) {
    // stop the blur event
    e.preventDefault();
  }

  renderResult() {
    const { users } = this.props;

    if ((users && users.length < 1) || !this.state.isFocused) {
      return;
    }

    return <div className="result">
      <ul>
      {
        users.map((user) => <li key={user.id}>
          <Link
            to={`/user/${user.username}`}
            onMouseDown={this.linkOnMouseDown}
            onClick={this.clickUser}
          >
            <img src={user.avatar} className="image-circle" />

            <div>
              <div className="username">
                {user.username}
              </div>

              {
                (user.name)
                ? <div className="fullname">
                  {user.name}
                </div>
                : ''
              }
            </div>
          </Link>
        </li>)
      }
      </ul>
    </div>;
  }

  renderDelete() {
    if (!this.state.keyword) {
      return '';
    }
    return <div
      className="delete-icon clickable"
      onClick={this.handleDelete}
    >
      <i className="fa fa-times-circle" aria-hidden="true"></i>
    </div>;
  }

  render() {
    return (
      <div className="search-form">
        <input
          type='text'
          placeholder='Search'
          value={this.state.keyword}
          onChange={this.updateInput('keyword')}
          onFocus={this.focus}
          onBlur={this.unfocus}
        />

        {this.renderResult()}

        <div className="search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>

        {this.renderDelete()}

      </div>
    );
  }
}

export default SearchForm;