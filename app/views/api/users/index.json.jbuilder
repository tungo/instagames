@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name
    json.avatar asset_path(user.avatar.url(:medium))
    json.photos({})
    json.photos do
      user.photos.each do |photo|
        json.set! photo.id do
          json.id photo.id
          json.urlMedium asset_path(photo.image.url(:medium))
          json.createdAt photo.created_at
        end
      end
    end

    json.currentUserFollowed @current_user.follows?(user)
  end
end
