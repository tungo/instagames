export const likePhoto = (photoId) => (
  $.ajax({
    method: 'POST',
    url: `/api/photos/${photoId}/likes`
  })
);

export const unlikePhoto = (photoId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${photoId}/likes`
  })
);