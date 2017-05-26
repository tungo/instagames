@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username.length < 18 ? user.username : "#{user.username[0, 20]}..."
    json.name user.name.length < 18 ? user.name : "#{user.name[0, 18]}..."
    json.avatar asset_path(user.avatar.url(:medium))
  end
end