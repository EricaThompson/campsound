# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# puts 'All Users Removed!'

# Item.destroy_all
# puts "All Items Destroyed!"

user1 = User.create(username: 'Demo User', password: 'Password')
user2 = User.create(username: 'Rainforest Records', password: 'Password')
puts "Users created!"

item1 = Item.create(
                "owner_id": user1.id,
                "title": 'Song 1',
                "genre": 'electronic',
                "about": 'About text.')
item2 = Item.create(
                "owner_id": user2.id,
                "title": 'Song 2',
                "genre": 'rock',
                "about": 'About text.')
story1 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 1',
                "story_type": 'review',
                "text": 'Story 1 review',
                "summary": 'Summary of story 1',
                "username": 'Demo User',
                'id': 1001)
story2 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 2',
                "story_type": 'news',
                "text": 'Story 2 news',
                "summary": 'Summary of story 2',
                "username": 'Rainforest Records',
                'id': 1002)
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


