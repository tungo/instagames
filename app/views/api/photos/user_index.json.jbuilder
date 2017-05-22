@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.url_medium asset_path(photo.image.url(:medium))
    json.created_at photo.created_at
  end
end