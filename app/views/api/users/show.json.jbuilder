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

json.currentUserFollowed @current_user_following_ids.include?(@user.id)

json.followersCount @user.in_follows.length
json.followers do
  @user.in_follows.each do |in_follow|
    follower = in_follow.follower
    json.set! follower.id do
      json.id follower.id
      json.username follower.username
      json.avatar follower.avatar
      json.currentUserFollowed @current_user_following_ids.include?(follower.id)
      json.createdAt in_follow.created_at
    end
  end
end

json.followingCount @user.out_follows.length
json.following do
  @user.out_follows.each do |out_follow|
    following = out_follow.following
    json.set! following.id do
      json.id following.id
      json.username following.username
      json.avatar following.avatar
      json.currentUserFollowed @current_user_following_ids.include?(following.id)
      json.createdAt out_follow.created_at
    end
  end
end
