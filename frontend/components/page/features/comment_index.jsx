import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickCommenter = this.handleClickCommenter.bind(this);
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();

      this.props.deleteComment(id);
    };
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
                      onClick={this.handleDelete(comment.id)}
                    ><i className="fa fa-times" aria-hidden="true"></i>
                    </button>
              }
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default CommentIndex;