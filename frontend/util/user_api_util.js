export const requestUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const updateUser = (formData) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/0`,
    data: formData,

    processData: false,
    contentType: false
  })
);