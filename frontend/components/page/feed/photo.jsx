import React from 'react';
import { Link } from 'react-router-dom';

import { selectAllComments } from '../../../reducers/selectors';
import LikeContainer from '../features/like_container';
import CommentIndexContainer from '../features/comment_index_container';
import CommentFormContainer from '../features/comment_form_container';

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

    let likesCount = '';
    if (photo.likesCount > 0) {
      likesCount = <div className="likes-count">
        {photo.likesCount} {photo.likesCount > 1 ? 'likes' : 'like'}
      </div>;
    }

    return (
      <article className="feed-photo">
        <header className="header">
          <div className="op">
            <Link to={`/user/${photo.username}`}>
              <img
                src={photo.avatar}
                alt={photo.username}
                className="image-circle"
              />
              {photo.username}
            </Link>
          </div>
        </header>

        <div className="image">
          <img src={photo.url} />
        </div>

        <div className="info">
          <LikeContainer
            photoId={photo.id}
            currentUserLiked={photo.currentUserLiked}
          />
          {likesCount}

          {caption}

          <CommentIndexContainer comments={photo.comments} />

          <div className="uploaded-at">
            {photo.uploaded_at}
          </div>

          <CommentFormContainer photoId={photo.id} />
        </div>
      </article>
    );
  }
}

export default Photo;