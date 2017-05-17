# Schema Information

## users
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    |
avatar          | string    |
bio             | text      |

## photos
column name | data type | details
------------|-----------|--------------------------------------------------
id          | integer   | not null, primary key
url         | string    | not null
caption     | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|---------------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique combine with photo_id
photo_id    | integer   | not null, foreign key (references photos), indexed unique combine with user_id

## comments
column name | data type | details
------------|-----------|---------------------------------------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## follows
column name  | data type | details
-------------|-----------|--------------------------------------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users), indexed, unique combine with following_id
following_id | integer   | not null, foreign key (references users), indexed, unique combine with follower_id
