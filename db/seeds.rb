# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
puts 'All Users Removed!'

Item.destroy_all
puts "All Items Destroyed!"

user1 = User.create(username: 'Demo User', password: 'Password')
user2 = User.create(username: 'Rainforest Records', password: 'Password')
puts "Users created!"

# item1 = Item.create(
#                 "owner_id": user1.id,
#                 "title": 'Song 1',
#                 "genre": 'electronic',
#                 "about": 'About text.')
# item2 = Item.create(
#                 "owner_id": user2.id,
#                 "title": 'Song 2',
#                 "genre": 'rock',
#                 "about": 'About text.')
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
story3 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 3',
                "story_type": 'review',
                "text": 'Story 3 review',
                "summary": 'Summary of story 3',
                "username": 'Demo User',
                'id': 1003)
story4 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 4',
                "story_type": 'news',
                "text": 'Story 4 news',
                "summary": 'Summary of story 4',
                "username": 'Rainforest Records',
                'id': 1004)
story5 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 5',
                "story_type": 'review',
                "text": 'Story 5 review',
                "summary": 'Summary of story 5',
                "username": 'Demo User',
                'id': 1005)
story6 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 6',
                "story_type": 'news',
                "text": 'Story 6 news',
                "summary": 'Summary of story 6',
                "username": 'Rainforest Records',
                'id': 1006)
story7 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 7',
                "story_type": 'review',
                "text": 'Story 7 review',
                "summary": 'Summary of story 7',
                "username": 'Demo User',
                'id': 1007)
story8 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 8',
                "story_type": 'news',
                "text": 'Story 8 news',
                "summary": 'Summary of story 8',
                "username": 'Rainforest Records',
                'id': 1008)
puts "8 stories created!"
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


