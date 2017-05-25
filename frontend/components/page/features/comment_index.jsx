import React from 'react';
import { Link } from 'react-router-dom';

import ConfirmModal from '../../other/confirm_modal';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteConfirming: false
    };

    this.openDeleteConfirm = this.openDeleteConfirm.bind(this);
    this.closeDeleteConfirm = this.closeDeleteConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClickCommenter = this.handleClickCommenter.bind(this);
  }

  openDeleteConfirm(id) {
    return (e) => {
      e.preventDefault();

      this.setState({deleteConfirming: true, id});
    };
  }

  closeDeleteConfirm() {
    this.setState({deleteConfirming: false});
  }

  handleDelete(e) {
    e.preventDefault();

    if (this.state.id) {
      this.props.deleteComment(this.state.id);
    }
    this.closeDeleteConfirm();
  }

  handleClickCommenter(e) {
    if (this.props.clickCommenter) {
      this.props.clickCommenter();
    }
  }

  render() {
    const { comments, currentUser } = this.props;

    return (
      <ul className="comments">
        {
          comments.map(comment => (
            <li key={comment.id}>
              <div>
                <Link
                  to={`/user/${comment.username}`}
                  onClick={this.handleClickCommenter}
                >
                  {comment.username}
                </Link>

                {comment.body}
              </div>

              <div className="comment-delete">
              {
                (currentUser.username !== comment.username)
                  ? ''
                  : <button
                      className="button-link"
                      onClick={this.openDeleteConfirm(comment.id)}
                    ><i className="fa fa-times" aria-hidden="true"></i>
                    </button>
              }
              </div>
            </li>
          ))
        }
        <ConfirmModal
          confirmOpen={this.state.deleteConfirming}
          confirmText="Delete comment"
          handleConfirm={this.handleDelete}
        />
      </ul>
    );
  }
}

export default CommentIndex;