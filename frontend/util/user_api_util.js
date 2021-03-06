export const requestUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const requestUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: {query}
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

export const deleteAvatar = () => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users/delete_avatar',
    data: {
      user: {
        avatar: null
      }
    }
  })
);

export const searchUsers = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/users/search',
    data: {query}
  })
);
