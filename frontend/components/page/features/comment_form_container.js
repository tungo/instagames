import { connect } from 'react-redux';

import { createComment, deleteComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form';

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);