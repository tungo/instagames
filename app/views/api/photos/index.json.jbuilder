@photos.each do |photo|
  json.partial! "photo", photo: photo
end