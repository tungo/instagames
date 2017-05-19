export const requestUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`
  })
);