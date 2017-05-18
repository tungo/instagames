import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { photo } = this.props;

    let caption = '';
    if (photo.caption) {
      caption = <div className="caption">
        <span>{photo.username} </span>
        {photo.caption}
      </div>;
    }

    return (
      <article className="feed-photo">
        <header className="header">
          <div className="op">
            <img src={photo.avatar} />
            {photo.username}
          </div>
          <div>
            {photo.uploaded_at}
          </div>
        </header>

        <div className="image">
          <img src={photo.url} />
        </div>

        <div className="info">
          {caption}
        </div>
      </article>
    );
  }
}

export default Photo;