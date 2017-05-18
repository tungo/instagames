import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const selectAllPhotos = (photos) => (
  orderBy(values(photos), ['created_at'], ['desc'])
);