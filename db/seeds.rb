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

Story.destroy_all
puts "All Stories Destroyed!"

user1 = User.create(username: 'Demo User', password: 'Password')
user2 = User.create(username: 'Rainforest Records', password: 'Password')
puts "Users created!"

item1 = Item.create(
                "owner_id": user1.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item1.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/1.jpeg"), filename: "1.jpeg")
item1.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/trees.mp3"), filename: "trees.mp3")

item2 = Item.create(
                "owner_id": user2.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item2.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/2.jpeg"), filename: "2.jpeg")
item2.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/2.mp3"), filename: "2.mp3")


item3 = Item.create(
                "owner_id": user1.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item3.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/3.jpeg"), filename: "3.jpeg")
item3.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/3.mp3"), filename: "3.mp3")

item4 = Item.create(
                "owner_id": user2.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item4.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/4.jpeg"), filename: "4.jpeg")
item4.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/4.mp3"), filename: "4.mp3")

item5 = Item.create(
                "owner_id": user1.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item5.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/5.jpeg"), filename: "5.jpeg")
item5.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/5.mp3"), filename: "5.mp3")

item6 = Item.create(
                "owner_id": user2.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item6.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/6.jpeg"), filename: "6.jpeg")
item6.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/6.mp3"), filename: "6.mp3")

item7 = Item.create(
                "owner_id": user1.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item7.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/7.jpeg"), filename: "7.jpeg")
item7.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/7.mp3"), filename: "7.mp3")

item8 = Item.create(
                "owner_id": user2.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item8.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/8.jpeg"), filename: "8.jpeg")
item8.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/8.mp3"), filename: "8.mp3")

item9 = Item.create(
                "owner_id": user1.id,
                "title": 'Electronic',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item9.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/9.jpeg"), filename: "9.jpeg")
item9.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/songs/1.mp3"), filename: "1.mp3")

# item10 = Item.create(
#                 "owner_id": user2.id,
#                 "title": 'Electronic',
#                 "genre": 'electronic',
#                 "about": 'About text.',
#                 'released': true,
#                 'artist_name': 'DU'
#                 )
# item10.cover.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/seed/cover/1.jpeg"), filename: "1.jpeg")
# item10.song.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/audio/trees.mp3"), filename: "trees.mp3")

# puts "Items created!"

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
                )
story2 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 2',
                "story_type": 'news',
                "text": 'Story 2 news',
                "summary": 'Summary of story 2',
                "username": 'Rainforest Records',
                )
story3 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 3',
                "story_type": 'review',
                "text": 'Story 3 review',
                "summary": 'Summary of story 3',
                "username": 'Demo User',
                )
story4 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 4',
                "story_type": 'news',
                "text": 'Story 4 news',
                "summary": 'Summary of story 4',
                "username": 'Rainforest Records',
                )
story5 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 5',
                "story_type": 'review',
                "text": 'Story 5 review',
                "summary": 'Summary of story 5',
                "username": 'Demo User',
                )
story6 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 6',
                "story_type": 'news',
                "text": 'Story 6 news',
                "summary": 'Summary of story 6',
                "username": 'Rainforest Records',
                )
story7 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 7',
                "story_type": 'review',
                "text": 'Story 7 review',
                "summary": 'Summary of story 7',
                "username": 'Demo User',
                )
story8 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 8',
                "story_type": 'news',
                "text": 'Story 8 news',
                "summary": 'Summary of story 8',
                "username": 'Rainforest Records',
                )
puts "8 stories created!"
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


