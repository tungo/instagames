import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const selectAllPhotos = (photos) => (
  orderBy(values(photos), ['created_at'], ['desc'])
);

export const selectAllComments = (comments) => {
  if (comments) {
    return orderBy(values(comments), ['created_at'], ['asc']);
  } else {
    return [];
  }
};