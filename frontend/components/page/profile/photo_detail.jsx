import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../features/like_container';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.deletePhoto(this.props.photo.id);
    this.props.closeModal();
  }



  render() {
    const { photo, currentUser } = this.props;

    let caption = '';
    if (photo.caption) {
      caption = <div className="caption">
        <span>{photo.username} </span>
        {photo.caption}
      </div>;
    }

    let deleteButton = '';
    if (currentUser.username === photo.username) {
      deleteButton = <button
        onClick={this.handleDelete}
        className="button-link"
      ><i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>;
    }

    let likesCount = <span>Be the first to like this</span>;
    if (photo.likesCount > 0) {
      likesCount = photo.likesCount + (photo.likesCount > 1 ? ' likes' : ' like');
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
            <div>
              <div className="name">
                <Link
                  to={`/user/${photo.username}`}
                  onClick={this.props.closeModal}
                >
                  <img
                    src={photo.avatar}
                    alt={`photo-${photo.caption}`}
                    className="image-circle"
                  />
                  {photo.username}
                </Link>
              </div>

              <div className="delete">
                {deleteButton}
              </div>
            </div>
          </header>

          <aside className="info">
            <LikeContainer
              photoId={photo.id}
              currentUserLiked={photo.currentUserLiked}
            />

            <div className="likes-count">
              {likesCount}
            </div>

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