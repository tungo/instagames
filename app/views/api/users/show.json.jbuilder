json.extract! @user, :id, :username, :name, :bio
json.avatar asset_path(@user.avatar.url(:medium))