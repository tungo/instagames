import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../features/like_container';
import CommentFormContainer from '../features/comment_form_container';
import CommentIndexContainer from '../features/comment_index_container';
import ConfirmModal from '../../other/confirm_modal';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteConfirming: false
    };

    this.openDeleteConfirm = this.openDeleteConfirm.bind(this);
    this.closeDeleteConfirm = this.closeDeleteConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.focusCommentInput = this.focusCommentInput.bind(this);
    this.clickCommenter = this.clickCommenter.bind(this);
  }

  componentDidMount() {
    this.focusCommentInput();
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.deletePhoto(this.props.photo.id);
    this.props.closeModal();
  }

  openDeleteConfirm() {
    this.setState({deleteConfirming: true});
  }

  closeDeleteConfirm() {
    this.setState({deleteConfirming: false});
  }

  focusCommentInput(e) {
    if (e) {
      e.preventDefault();
    }

    document.getElementById(`comment-photo-${this.props.photo.id}`).focus();
  }

  clickCommenter() {
    this.props.closeModal();
    scroll(0,0);
  }

  render() {
    const { photo, currentUser } = this.props;

    let caption = '';
    if (photo.caption) {
      caption = <div className="caption">
        <Link to={`/user/${photo.username}`} onClick={this.clickCommenter}>
          {photo.username}
        </Link>
        {photo.caption}
      </div>;
    }

    let deleteButton = '';
    if (currentUser.username === photo.username) {
      deleteButton = <button
        onClick={this.openDeleteConfirm}
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
            alt={`photo-${photo.id}`}
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
                    alt={`photo-${photo.username}`}
                    className="image-circle"
                  />
                  {photo.username}
                </Link>
              </div>

              <div className="delete">

                {deleteButton}

                <ConfirmModal
                  confirmOpen={this.state.deleteConfirming}
                  closeConfirm={this.closeDeleteConfirm}
                  confirmText="Delete Photo"
                  handleConfirm={this.handleDelete}
                />
              </div>
            </div>
          </header>

          <aside className="info">
            <div>
              {caption}

              <CommentIndexContainer
                comments={photo.comments}
                clickCommenter={this.clickCommenter}
              />
            </div>

            <div className="features">
              <div>
                <LikeContainer
                  photoId={photo.id}
                  currentUserLiked={photo.currentUserLiked}
                />

                <button
                  className="button-link focus-comment"
                  onClick={this.focusCommentInput}
                >
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                </button>
              </div>

              <div className="likes-count">
                {likesCount}
              </div>

              <div className="uploaded-at">
                {photo.uploadedAt}
              </div>

              <CommentFormContainer photoId={photo.id} />
            </div>

          </aside>
        </section>
      </article>
    );
  }
}

export default PhotoDetail;