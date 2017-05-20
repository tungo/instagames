export const requestUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.updateType}`,
    data: {user}
  })
);

export const updateAvatar = (formData) => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users/avatar',
    data: formData,

    processData: false,
    contentType: false
  })
);