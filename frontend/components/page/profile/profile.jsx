import React from 'react';
import { Link } from 'react-router-dom';

import PhotoIndex from './photo_index';
import AvatarModal from './avatar_modal';

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
    const { user, photos, fetchPhotoDetail } = this.props;

    return (
      <section className="profile-page">
        <article>
          <header>

            <AvatarModal user={user} />

            <section className="information">
              <div className="title">
                <div>{user.username}</div>
                <Link
                  to="/edit"
                  alt="Edit Profile"
                  className="link-button"
                >
                  Edit Profile
                </Link>
              </div>

              <ul className="summary">
                <span className="count">{photos.length} </span>
                posts
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