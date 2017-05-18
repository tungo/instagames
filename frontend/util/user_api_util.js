export const requestUser = (username) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`
  })
);