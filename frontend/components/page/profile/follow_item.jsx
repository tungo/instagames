import React from 'react';
import { Link } from 'react-router-dom';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false
    };

    this.clickUser = this.clickUser.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  clickUser() {
    this.props.closeModal();
    scroll(0,0);
  }

  handleFollow(e) {
    e.preventDefault();

    this.setState({following: true});

    const { currentUser, user, followUser, unfollowUser } = this.props;
    const result = (user.currentUserFollowed)
                  ? unfollowUser(user.id)
                  : followUser(user.id);
    result.always(() => this.setState({following: false}));
  }

  render() {

    const { currentUser, user } = this.props;

    let followText = user.currentUserFollowed ? 'following' : 'follow';

    let followButton = <button
      className={`blue-button ${followText}`}
      onClick={this.handleFollow}
      disabled={this.state.following}
    >
      {followText}
    </button>;

    if (currentUser.id === user.id) {
      followButton = '';
    }

    return (
      <div>
        <div className="name">
          <Link
            to={`/user/${user.username}`}
            onClick={this.clickUser}
          >
            <img src={user.avatar} className="image-circle" />
          </Link>

          <div>
            <Link
              to={`/user/${user.username}`}
              onClick={this.clickUser}
            >
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
    );
  }
}

export default FollowItem;