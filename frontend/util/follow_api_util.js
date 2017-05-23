export const fetchFollowers = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/followers`
  })
);

export const fetchFollowing = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/following`
  })
);

export const followUser = (userId) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/follows`
  })
);

export const unfollowUser = (userId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/follows`
  })
);