# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
avatar          | string    | not null
bio             | text      | not null

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
caption     | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## follows
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users), indexed
following_id | integer   | not null, foreign key (references users), indexed
