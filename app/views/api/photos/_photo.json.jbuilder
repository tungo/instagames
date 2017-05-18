uploaded_at = distance_of_time_in_words(photo.created_at, Time.now)

json.id photo.id
json.username photo.user.username
json.avatar asset_path(photo.user.avatar.url(:thumb))
json.url asset_path(photo.image.url(:large))
json.caption photo.caption
json.created_at photo.created_at
json.uploaded_at uploaded_at