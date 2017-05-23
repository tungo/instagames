import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const selectAllPhotos = (photos) => {
  if (photos) {
    return orderBy(values(photos), ['createdAt'], ['desc']);
  } else {
    return [];
  }
};

export const selectAllComments = (comments) => {
  if (comments) {
    return orderBy(values(comments), ['createdAt'], ['asc']);
  } else {
    return [];
  }
};