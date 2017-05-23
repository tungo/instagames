json.extract! @user, :id, :username, :name, :bio
json.avatar asset_path(@user.avatar.url(:medium))
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.url_medium asset_path(photo.image.url(:medium))
      json.created_at photo.created_at
      json.likesCount photo.likes.length
      json.commentsCount photo.comments.length
    end
  end
end