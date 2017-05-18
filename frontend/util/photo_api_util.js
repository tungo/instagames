export const feedPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

export const requestPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const createPhoto = (formData) => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: formData,

    processData: false,
    contentType: false
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo}`,
    data: {photo}
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${id}`,
  })
);

export const requestUserPhotos = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/photos`
  })
);