json.id @user.id
json.avatar asset_path(@user.avatar.url(:medium))
json.isAvatar !@user.avatar_file_name.nil?