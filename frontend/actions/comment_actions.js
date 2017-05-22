import * as CommentAPIUtil from '../util/comment_api_util';


export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});


export const createComment = (comment) => (dispatch) => (
  CommentAPIUtil.createComment(comment)
    .then((rspComment) => dispatch(receiveComment(rspComment)))
);

export const deleteComment = (id) => (dispatch) => (
  CommentAPIUtil.deleteComment(id)
    .then((comment) => dispatch(removeComment(comment)))
);
