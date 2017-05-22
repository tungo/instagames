import * as PhotoAPIUtil from '../util/photo_api_util';

import { receiveFormErrors } from './error_actions';
import { startLoading, stopLoading } from './loading_actions';
import { receiveUserPhoto, removeUserPhoto } from './user_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTO_DETAIL = 'RECEIVE_PHOTO_DETAIL';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';


export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotoDetail = (photoDetail) => ({
  type: RECEIVE_PHOTO_DETAIL,
  photoDetail
});

export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id
});


export const feedPhotos = () => (dispatch) => {
  dispatch(startLoading());

  return PhotoAPIUtil.feedPhotos()
    .then((photos) => dispatch(receivePhotos(photos)));
};

export const createPhoto = (photo) => (dispatch) => {
  dispatch(startLoading());

  return PhotoAPIUtil.createPhoto(photo)
    .then((rspPhoto) => {
      dispatch(receivePhoto(rspPhoto));
      dispatch(receiveUserPhoto(rspPhoto));
      return rspPhoto;
    })
    .fail((err) =>
      dispatch(receiveFormErrors('photoUpload', err.responseJSON)
    ));
};

export const fetchPhotoDetail = (id) => (dispatch, getState) => {
  dispatch(startLoading());

  const photo = getState().photos[id];
  if (photo) {
    dispatch(receivePhotoDetail(photo));
    return photo;
  }

  return PhotoAPIUtil.requestPhoto(id)
    .then((rspPhoto) => {
      dispatch(receivePhotoDetail(rspPhoto));
      return rspPhoto;
    })
    .fail((err) => console.log(err));
};

export const deletePhoto = (id) => (dispatch) => {
  dispatch(startLoading());

  return PhotoAPIUtil.deletePhoto(id)
    .then((photo) => dispatch(removePhoto(photo.id)));
};