import React from 'react';
import { Link } from 'react-router-dom';

import PhotoIndex from './photo_index';
import AvatarModal from './avatar_modal';
import FollowModal from './follow_modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false
    };

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentWillReceiveProps({ userId }) {
    if (this.props.userId !== userId ) {
      this.props.fetchUser(userId);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
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

  renderSetting() {
    const { user, currentUser } = this.props;

    let setting = <Link
      to="/account/edit"
      alt="Edit Profile"
      className="link-button"
    >
      Edit Profile
    </Link>;

    if (user.username !== currentUser.username) {
      let followText = user.currentUserFollowed ? 'following' : 'follow';

      setting = <button
        className={`blue-button ${followText}`}
        onClick={this.handleFollow}
        disabled={this.state.submitting}
      >{followText}
      </button>;
    }

    return setting;
  }

  render() {
    const { user, photos, fetchPhotoDetail, currentUser } = this.props;

    let avatar = <AvatarModal user={user} />;
    if (user.username !== currentUser.username) {
      avatar = <figure>
        <img
          src={user.avatar}
          alt={user.username}
          className="image-circle"
        />
      </figure>;
    }

    return (
      <section className="profile-page">
        <article>
          <header>

            {avatar}

            <section className="information">
              <div className="title">
                <div>{user.username}</div>

                {this.renderSetting()}
              </div>

              <ul className="summary">
                <div className="count">
                  <span>{photos.length} </span>
                  posts
                </div>

                <FollowModal
                  count={user.followersCount}
                  followType="followers"
                />

                <FollowModal
                  count={user.followingCount}
                  followType="following"
                />
              </ul>

              <div className="bio">
                <span>{user.name} </span>
                {user.bio}
              </div>
            </section>
          </header>

          <PhotoIndex photos={photos} fetchPhotoDetail={fetchPhotoDetail} />

        </article>
      </section>
    );
  }
}

export default Profile;