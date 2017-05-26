import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false
    };

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleFollow(user) {
    return (e) => {
      e.preventDefault();

      this.setState({following: true});

      const { currentUser, followUser, unfollowUser } = this.props;
      const result = (user.currentUserFollowed)
                    ? unfollowUser(user.id)
                    : followUser(user.id);
      result.always(() => this.setState({following: false}));
    };
  }

  renderUsers() {
    const { currentUser, users } = this.props;
    return users.map((user) => {

      let followText = user.currentUserFollowed ? 'following' : 'follow';

      let followButton = <button
        className={`blue-button ${followText}`}
        onClick={this.handleFollow(user)}
        disabled={this.state.following}
      >
        {followText}
      </button>;

      if (currentUser.id === user.id) {
        followButton = '';
      }

      return <li key={user.id}>

        <div>
          <div className="name">
            <Link to={`/user/${user.username}`}>
              <img src={user.avatar} className="image-circle" />
            </Link>

            <div>
              <Link to={`/user/${user.username}`}>
                {user.username}
              </Link>

              {
                (user.name)
                ? <div className="fullname">
                  {user.name}
                </div>
                : ''
              }
            </div>
          </div>

          <div>
            {followButton}
          </div>
        </div>
      </li>;
    });
  }

  render() {

    return (
      <article className="follows suggestions">
        <div>
          <header>
            <h3>Suggestions for you</h3>
          </header>

          <main>
            <ul className="follows-list">
              {this.renderUsers()}
            </ul>
          </main>
        </div>
      </article>
    );
  }
}

export default Users;