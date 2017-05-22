import { connect } from 'react-redux';

import { selectAllComments } from '../../../reducers/selectors';
import { deleteComment } from '../../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  comments: selectAllComments(ownProps.comments),
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);