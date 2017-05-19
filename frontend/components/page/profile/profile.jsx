import React from 'react';

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
        <img src={photo.url} alt={photo.url} />
      </li>
    ));

    return content;
  }

  render() {
    const { user, photos } = this.props;
    console.log(user);

    return (
      <article className="profile-page">
        <header className="information">
          <div className="avatar">
            <img src={user.avatar} />
          </div>
          <div>
            <div className="username">
              {user.username}
            </div>
            <div className="summary">
              {photos.length} post
            </div>
            <div className="bio">
              {user.name}
              {user.bio}
            </div>
          </div>
        </header>

        <section className="photos">
          <ul>
            {this.renderPhotos()}
          </ul>
        </section>
      </article>
    );
  }
}

export default Profile;