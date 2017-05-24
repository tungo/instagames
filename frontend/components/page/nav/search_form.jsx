import React from 'react';
import { Link } from 'react-router-dom';

import onClickOutside from 'react-onclickoutside';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.clickUser = this.clickUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickOutside(e) {
    if (this.state.keyword) {
      this.props.clearSearchUsers();
      this.setState({keyword: ''});
    }
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

  renderResult() {
    const { users } = this.props;

    if (users && users.length < 1) {
      return '';
    }

    return <div className="result">
      <ul>
      {
        users.map((user) => <li key={user.id}>
          <Link
            to={`/user/${user.username}`}
            onClick={this.clickUser}
          >
            <img src={user.avatar} className="image-circle" />
            {user.username}
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

export default onClickOutside(SearchForm);