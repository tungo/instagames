@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.urlMedium asset_path(photo.image.url(:medium))
    json.createdAt photo.created_at
    json.likesCount photo.likes.length
    json.commentsCount photo.comments.length
  end
end