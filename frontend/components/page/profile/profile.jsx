import React from 'react';
import { Link } from 'react-router-dom';

import PhotoIndex from './photo_index';
import AvatarModal from './avatar_modal';
import FollowModal from './follow_modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps({ userId }) {
    if (this.props.userId !== userId ) {
      this.props.fetchUser(userId);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const { user, photos, fetchPhotoDetail, currentUser } = this.props;

    // current user profile
    let avatar = <AvatarModal user={user} />;
    let setting = <Link
      to="/account/edit"
      alt="Edit Profile"
      className="link-button"
    >
      Edit Profile
    </Link>;

    // other users profile
    if (user.username !== currentUser.username) {
      setting = '';
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

                {setting}
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