import React from 'react';
import { Link } from 'react-router-dom';

import PhotoIndex from './photo_index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
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
            <figure>
              <img
                src={user.avatar}
                alt={user.username}
                className="image-circle"
              />
            </figure>

            <section className="information">
              <div className="title">
                <div>{user.username}</div>
                <Link
                  to="/edit"
                  alt="Edit Profile"
                  className="blue-link-button"
                >
                  Edit Profile
                </Link>
              </div>

              <ul className="summary">
                <span className="count">{photos.length} </span>
                posts
              </ul>

              <div className="bio">
                <span>{user.name}</span>
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