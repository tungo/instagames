import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.photo);
  }
  render() {
    const { photo } = this.props;
    return (
      <div className="feed-photo">
        <div className="header">
          <div>
            {photo.username}
          </div>
          <div>
            {photo.uploaded_at}
          </div>
        </div>

        <div className="image">
          <img src={photo.url} />
        </div>

        <div className="caption">
          <span>{photo.username}</span>
          {photo.caption}
        </div>
      </div>
    );
  }
}

export default Photo;