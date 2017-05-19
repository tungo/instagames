json.extract! @user, :id, :username, :name, :bio
json.avatar asset_path(@user.avatar.url(:medium))
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.url asset_path(photo.image.url(:medium))
      # json.created_at j
    end
  end
end