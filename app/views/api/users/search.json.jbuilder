@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name
    json.avatar asset_path(user.avatar.url(:medium))
  end
end