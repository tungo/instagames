import * as PhotoAPIUtil from '../util/photo_api_util';

import { receiveFormErrors } from './error_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';


export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
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
    )
  )
);

