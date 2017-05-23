import * as FollowAPIUtil from '../util/follow_api_util';


export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';


export const receiveFollow = (userId) => ({
  type: RECEIVE_FOLLOW,
  userId
});

export const removeFollow = (userId) => ({
  type: REMOVE_FOLLOW,
  userId
});


export const followUser = (userId) => (dispatch) => (
  FollowAPIUtil.followUser(userId)
    .then((follow) => dispatch(receiveFollow(follow.userId)))
);

export const unfollowUser = (userId) => (dispatch) => (
  FollowAPIUtil.unfollowUser(userId)
    .then((follow) => dispatch(removeFollow(follow.userId)))
);
