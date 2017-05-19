import React from 'react';

class PhotoDetail extends React.Component {
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
      <article className="photo-detail">
        <figure className="left">
          <img
            src={photo.url}
            alt={`photo-${photo.caption}`}
          />
        </figure>

        <section className="right">
          <header>
            <img
              src={photo.avatar}
              alt={`photo-${photo.caption}`}
              className="image-circle"
            />
            {photo.username}
          </header>

          <aside className="info">
            <div className="uploaded-at">
              {photo.uploaded_at}
            </div>

            {caption}

          </aside>
        </section>
      </article>
    );
  }
}

export default PhotoDetail;