import React from 'react';

import Photo from './photo';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.feedPhotos();
  }

  renderPhotos() {
    return this.props.photos.map((photo) => (
      <li key={`photo-${photo.id}`}>
        <Photo photo={photo} />
      </li>
    ));
  }

  render() {
    return (
      <section className="feed-page">
        <ul>
          {this.renderPhotos()}
        </ul>
      </section>
    );
  }
}

export default Feed;