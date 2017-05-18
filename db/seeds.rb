# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(username: 'mario', password: 'mario_password')
user2 = User.create(username: 'luigi', password: 'luigi_password')
user3 = User.create(username: 'link', password: 'link_password')
user4 = User.create(username: 'zelda', password: 'zelda_password')
user5 = User.create(username: 'peach', password: 'peach_password')
user6 = User.create(username: 'chef', password: 'chef_password')

photo1 = Photo.create(user_id: user1.id)
photo2 = Photo.create(user_id: user1.id)
photo3 = Photo.create(user_id: user1.id)
photo4 = Photo.create(user_id: user3.id)
photo5 = Photo.create(user_id: user3.id)
photo6 = Photo.create(user_id: user4.id)
photo7 = Photo.create(user_id: user5.id)