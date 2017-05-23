json.extract! @user, :id, :username, :name, :bio
json.avatar asset_path(@user.avatar.url(:medium))
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.urlMedium asset_path(photo.image.url(:medium))
      json.createdAt photo.created_at
      json.likesCount photo.likes.length
      json.commentsCount photo.comments.length
    end
  end
end

json.followersCount @user.followers.length
json.followers do
  @user.followers.each do |follow|
    json.set! follow.id do
      json.id follow.id
      json.username follow.username
      json.avatar follow.avatar
      json.currentUserFollowed @current_user_following_ids.include?(follow.id)
    end
  end
end

json.followingCount @user.following.length
json.following do
  @user.following.each do |follow|
    json.set! follow.id do
      json.id follow.id
      json.username follow.username
      json.avatar follow.avatar
      json.currentUserFollowed @current_user_following_ids.include?(follow.id)
    end
  end
end
