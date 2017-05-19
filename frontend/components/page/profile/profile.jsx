import React from 'react';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  renderPhotos() {
    const { photos } = this.props;
    if (photos.length < 1) {
      return '';
    }

    const content = photos.map((photo) => (
      <li key={`photo-${photo.id}`}>
        <img src={photo.url} alt={`photo-${photo.caption}`} />
      </li>
    ));

    return content;
  }

  render() {
    const { user, photos } = this.props;
    console.log(user);

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

          <main className="photos">
            <ul>
              {this.renderPhotos()}
            </ul>
          </main>
        </article>
      </section>
    );
  }
}

export default Profile;