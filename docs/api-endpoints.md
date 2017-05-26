# API Endpoints

## HTML API

### Root

Method | URI | Description
-------|-----|--------------------
`GET`  | `/` | Loads React web app

## JSON API

### Users

Method  | URI                    | Description
--------|------------------------|---------------------------
`GET`   | `/api/users`           | Get all users
`POST`  | `/api/users`           | Create new user
`GET`   | `/api/users/:id`       | Get user by id or username
`PATCH` | `/api/users/:id`       | Update user data
`GET`   | `/api/users/search`    | Search user by keyword

### Session

Method   | URI            | Description
---------|----------------|------------
`POST`   | `/api/session` | Log in
`DELETE` | `/api/session` | Log out

### Photos

Method   | URI                          | Description
---------|------------------------------|----------------------------------
`GET`    | `/api/photos`                | Get all photos
`POST`   | `/api/photos`                | Create new photo for current user
`GET`    | `/api/photos/:id`            | Get photo by id
`DELETE` | `/api/photos/:id`            | Delete photo by id
`GET`    | `/api/users/:user_id/photos` | Get all photos by user id

### Likes

Method   | URI                           | Description
---------|-------------------------------|----------------------------
`POST`   | `/api/photos/:photo_id/likes` | Current user like a photo
`DELETE` | `/api/photos/:photo_id/likes` | Current user unlike a photo

[reserve for show likers]: # (`GET`    | `/api/photos/:photo_id/likes` | Get all likes by photo id)

### Comments

Method   | URI                 | Description
---------|---------------------|---------------------------
`POST`   | `/api/comments`     | Create comment for a photo
`DELETE` | `/api/comments/:id` | Delete comment by id

[reserve for lazy load]: # (`GET`    | `/api/photos/:photo_id/comments` | Get all comments by photo id)

### Follows

Method   | URI                             | Description
---------|---------------------------------|------------------------------------
`GET`    | `/api/users/:user_id/following` | Get all following of a user
`GET`    | `/api/users/:user_id/followers` | Get all followers of a user
`POST`   | `/api/users/:user_id/follows`   | Current user follows another user
`DELETE` | `/api/users/:user_id/follows`   | Current user unfollows another user
