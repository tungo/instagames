import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();

      this.props.deleteComment(id);
    };
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className="comments">
        {
          comments.map(comment => (
            <li key={comment.id}>
              <div>
                <span>{comment.username} </span>
                {comment.body}
              </div>

              <div className="comment-delete">
                <button
                  className="button-link"
                  onClick={this.handleDelete(comment.id)}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default CommentIndex;