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
user2 = User.create(username: 'Rainforest Records', password: 'Password', location: 'los angeles', bio: 'engineering!')
puts "Users created!"

item1 = Item.create(
                "owner_id": user1.id,
                "title": '1',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item1.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/1.jpeg"), filename: "cover-1")
item1.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-1")

item2 = Item.create(
                "owner_id": user2.id,
                "title": '2',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rainy'
                )
item2.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/2.jpeg"), filename: "cover-2")
item2.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-2")


item3 = Item.create(
                "owner_id": user1.id,
                "title": '3',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'demo'
                )
item3.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/3.jpeg"), filename: "cover-3")
item3.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/3.mp3"), filename: "song-3")

item4 = Item.create(
                "owner_id": user2.id,
                "title": '4',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'RNYDY'
                )
item4.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/4.jpeg"), filename: "cover-4")
item4.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/4.mp3"), filename: "song-4")

item5 = Item.create(
                "owner_id": user1.id,
                "title": '5',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DMO USR'
                )
item5.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/5.jpeg"), filename: "cover-5")
item5.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/5.mp3"), filename: "song-5")

item6 = Item.create(
                "owner_id": user2.id,
                "title": '6',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'RaRe'
                )
item6.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/6.jpeg"), filename: "cover-6")
item6.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/6.mp3"), filename: "song-6")

item7 = Item.create(
                "owner_id": user1.id,
                "title": '7',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item7.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/7.jpeg"), filename: "cover-7")
item7.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/7.mp3"), filename: "song-7")

item8 = Item.create(
                "owner_id": user2.id,
                "title": '8',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rainforest Records'
                )
item8.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/8.jpeg"), filename: "cover-8")
item8.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/8.mp3"), filename: "song-8")

item9 = Item.create(
                "owner_id": user1.id,
                "title": '9',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Demo User'
                )
item9.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/9.jpeg"), filename: "cover-9")
item9.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-9")

item10 = Item.create(
                "owner_id": user2.id,
                "title": '10',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Demo User'
                )
item10.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/10.jpeg"), filename: "cover-10")
item10.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-10")
puts "Items created!"

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

story9 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 9',
                "story_type": 'review',
                "text": 'Story 9 review',
                "summary": 'Summary of story 9',
                "username": 'Demo User',
                )

story10 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 10',
                "story_type": 'news',
                "text": 'Story 10 news',
                "summary": 'Summary of story 10',
                "username": 'Rainforest Records',
                )
puts "10 stories created!"
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


