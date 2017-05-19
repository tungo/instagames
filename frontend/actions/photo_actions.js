import * as PhotoAPIUtil from '../util/photo_api_util';

import { receiveFormErrors } from './error_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTO_DETAIL = 'RECEIVE_PHOTO_DETAIL';


export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotoDetail = (photo) => ({
  type: RECEIVE_PHOTO_DETAIL,
  photoDetail: photo
});


export const feedPhotos = () => (dispatch) => (
  PhotoAPIUtil.feedPhotos()
    .then((photos) => dispatch(receivePhotos(photos)))
);

export const createPhoto = (photo) => (dispatch) => (
  PhotoAPIUtil.createPhoto(photo)
    .then((rspPhoto) => dispatch(receivePhoto(rspPhoto)))
    .fail((err) =>
      dispatch(receiveFormErrors('photoUpload', err.responseJSON)
    ))
);

export const fetchPhotoDetail = (id) => (dispatch, getState) => {
  const statePhoto = getState().photos[id];
  if (statePhoto) {
    return dispatch(receivePhotoDetail(statePhoto));
  }

  return PhotoAPIUtil.requestPhoto(id)
    .then((photo) => dispatch(receivePhotoDetail(photo)))
    .fail((err) => console.log(err));
};