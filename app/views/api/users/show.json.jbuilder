json.extract! @user, :id, :username, :name, :bio
json.isAvatar !@user.avatar_file_name.nil?
json.avatar asset_path(@user.avatar.url(:medium))
json.photos({})
json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.urlMedium asset_path(photo.image.url(:medium))
      json.createdAt photo.created_at
      json.likesCount photo.likes.length
      json.commentsCount photo.comments.length
    end
  end
end

json.currentUserFollowed @current_user.follows?(@user)

json.followersCount @user.in_follows.length
json.followers({})
json.followers do
  @user.in_follows.each do |in_follow|
    follower = in_follow.follower
    json.set! follower.id do
      json.id follower.id
      json.username follower.username
      json.name follower.name
      json.avatar asset_path(follower.avatar.url(:medium))
      json.currentUserFollowed @current_user.follows?(follower)
      json.createdAt in_follow.created_at
    end
  end
end

json.followingCount @user.out_follows.length
json.following({})
json.following do
  @user.out_follows.each do |out_follow|
    following = out_follow.following
    json.set! following.id do
      json.id following.id
      json.username following.username
      json.name following.name
      json.avatar asset_path(following.avatar.url(:medium))
      json.currentUserFollowed @current_user.follows?(following)
      json.createdAt out_follow.created_at
    end
  end
end
