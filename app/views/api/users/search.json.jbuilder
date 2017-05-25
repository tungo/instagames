@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.name user.name.empty? ? '' : "#{user.name[0, 20]}..."
    json.avatar asset_path(user.avatar.url(:medium))
  end
end