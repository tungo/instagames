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

export const selectAllFollows = (follows) => {
  if (follows) {
    return orderBy(values(follows), ['createdAt'], ['desc']);
  } else {
    return [];
  }
};

export const selectAllUsers = (users) => {
  if (users) {
    return orderBy(values(users), ['username'], ['asc']);
  } else {
    return [];
  }
};