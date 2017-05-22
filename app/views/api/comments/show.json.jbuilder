json.extract! @comment, :id, :body, :created_at
json.userId @comment.user_id
json.photoId @comment.photo_id
json.username @comment.user.username