import * as LikeAPIUtil from '../util/like_api_util';


export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


export const receiveLike = (photoId) => ({
  type: RECEIVE_LIKE,
  photoId
});

export const removeLike = (photoId) => ({
  type: REMOVE_LIKE,
  photoId
});


export const likePhoto = (photoId) => (dispatch) => (
  LikeAPIUtil.likePhoto(photoId)
    .then((like) => dispatch(receiveLike(like.photo_id)))
);

export const unlikePhoto = (photoId) => (dispatch) => (
  LikeAPIUtil.unlikePhoto(photoId)
    .then((like) => dispatch(removeLike(like.photo_id)))
);
