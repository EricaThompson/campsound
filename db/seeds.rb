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

user1 = User.create(username: 'Demo User', password: 'Password', location: 'SF', bio: 'Musing')

user2 = User.create(username: 'Rainforest Records', password: 'Password', location: 'los angeles', bio: 'engineering!')
user2.user_img.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/users/rainforest-records.jpg"), filename: 'rainforest-records')
puts "Users created!"

item1 = Item.create(
                "owner_id": user1.id,
                "title": 'This Clarity',
                "genre": 'electronic',
                "about": 'Electronic Clarity.',
                'released': true,
                'artist_name': 'DU'
                )
item1.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/1.jpeg"), filename: "cover-1")
item1.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-1")

item2 = Item.create(
                "owner_id": user2.id,
                "title": 'True Evening',
                "genre": 'metal',
                "about": 'Metal Evening: the period of time at the end of the day, usually from about 6 p.m. to bedtime.
                          "it was 7:00 in the evening"',
                'released': true,
                'artist_name': 'Rainy'
                )
item2.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/2.jpeg"), filename: "cover-2")
item2.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-2")


item3 = Item.create(
                "owner_id": user1.id,
                "title": 'Ten Brave Life',
                "genre": 'rock',
                "about": 'Rock Life',
                'released': true,
                'artist_name': 'demo'
                )
item3.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/3.jpeg"), filename: "cover-3")
item3.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/3.mp3"), filename: "song-3")

item4 = Item.create(
                "owner_id": user2.id,
                "title": 'Lounge Nocturn',
                "genre": 'alternative',
                "about": 'Alternative Lounge.',
                'released': true,
                'artist_name': 'RNYDY'
                )
item4.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/4.jpeg"), filename: "cover-4")
item4.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/4.mp3"), filename: "song-4")

item5 = Item.create(
                "owner_id": user1.id,
                "title": 'Just Relax',
                "genre": 'hip hop',
                "about": 'Hip Hop and relax.',
                'released': true,
                'artist_name': 'DMO USR'
                )
item5.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/5.jpeg"), filename: "cover-5")
item5.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/5.mp3"), filename: "song-5")

item6 = Item.create(
                "owner_id": user2.id,
                "title": 'Low Voice',
                "genre": 'experimental',
                "about": 'Experimental Voice.',
                'released': true,
                'artist_name': 'Rare'
                )
item6.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/6.jpeg"), filename: "cover-6")
item6.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/6.mp3"), filename: "song-6")

item7 = Item.create(
                "owner_id": user1.id,
                "title": 'Another Thoughts',
                "genre": 'punk',
                "about": 'Punk thoughts.',
                'released': true,
                'artist_name': 'DU'
                )
item7.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/7.jpeg"), filename: "cover-7")
item7.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/7.mp3"), filename: "song-7")

item8 = Item.create(
                "owner_id": user2.id,
                "title": 'Relax Level',
                "genre": 'pop',
                "about": 'Pop level',
                'released': true,
                'artist_name': 'Rainforest Records'
                )
item8.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/8.jpeg"), filename: "cover-8")
item8.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/8.mp3"), filename: "song-8")

item9 = Item.create(
                "owner_id": user1.id,
                "title": 'The Commission',
                "genre": 'ambient',
                "about": 'Ambient Commission.',
                'released': true,
                'artist_name': 'Demo User'
                )
item9.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/9.jpeg"), filename: "cover-9")
item9.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-9")

item10 = Item.create(
                "owner_id": user2.id,
                "title": 'First Year',
                "genre": 'other',
                "about": 'Other Year.',
                'released': true,
                'artist_name': 'Rainy User'
                )
item10.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/10.jpeg"), filename: "cover-10")
item10.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-10")
puts "Items created!"

forestStory = Story.create(
                "owner_id": user2.id,
                "title": 'The Forest Through the Trees',
                "story_type": 'review',
                "summary": 'A poem',
                "username": 'Rainforest Records',
                "text": '
                You should lie down now and remember the forest, 
                for it is disappearing--
                no, the truth is it is gone now 
                and so what details you can bring back 
                might have a kind of life.

                Not the one you had hoped for, but a life
                --you should lie down now and remember the forest--
                nonetheless, you might call it "in the forest,"
                no the truth is, it is gone now,
                starting somewhere near the beginning, that edge,

                Or instead the first layer, the place you remember 
                (not the one you had hoped for, but a life)
                as if it were firm, underfoot, for that place is a sea, 
                nonetheless, you might call it "in the forest,"
                which we can never drift above, we were there or we were not,

                No surface, skimming. And blank in life, too, 
                or instead the first layer, the place you remember, 
                as layers fold in time, black humus there, 
                as if it were firm, underfoot, for that place is a sea, 
                like a light left hand descending, always on the same keys.

                The flecked birds of the forest sing behind and before 
                no surface, skimming. And blank in life, too, 
                sing without a music where there cannot be an order, 
                as layers fold in time, black humus there, 
                where wide swatches of light slice between gray trunks,

                Where the air has a texture of drying moss, 
                the flecked birds of the forest sing behind and before:
                a musk from the mushrooms and scalloped molds. 
                They sing without a music where there cannot be an order, 
                though high in the dry leaves something does fall,

                Nothing comes down to us here. 
                Where the air has a texture of drying moss, 
                (in that place where I was raised) the forest was tangled, 
                a musk from the mushrooms and scalloped molds, 
                tangled with brambles, soft-starred and moving, ferns

                And the marred twines of cinquefoil, false strawberry, sumac--
                nothing comes down to us here, 
                stained. A low branch swinging above a brook 
                in that place where I was raised, the forest was tangled, 
                and a cave just the width of shoulder blades.

                You can understand what I am doing when I think of the entry--
                and the marred twines of cinquefoil, false strawberry, sumac--
                as a kind of limit. Sometimes I imagine us walking there 
                (. . .pokeberry, stained. A low branch swinging above a brook) 
                in a place that is something like a forest.

                But perhaps the other kind, where the ground is covered 
                (you can understand what I am doing when I think of the entry) 
                by pliant green needles, there below the piney fronds, 
                a kind of limit. Sometimes I imagine us walking there. 
                And quickening below lie the sharp brown blades,

                The disfiguring blackness, then the bulbed phosphorescence of the roots. 
                But perhaps the other kind, where the ground is covered, 
                so strangely alike and yet singular, too, below
                the pliant green needles, the piney fronds.
                Once we were lost in the forest, so strangely alike and yet singular, too, 
                but the truth is, it is, lost to us now. 

                -- "The Forest" Susan Stewart',
               
                )

goldStory = Story.create(
                "owner_id": user2.id,
                "title": 'Gold is in Bloom',
                "story_type": 'news',
                "summary": 'A Drabble',
                "username": 'Rainforest Records',
                "text": 
                '"What Could This Thing With A Special Width Be?"

                It has a special width and a large, light length, which is endearing. Rarely has a special width reminded me more of the heart of a steadfast lion.

                Its height is as flawless as an exemplary, truthful leaf, which has been living happily in the magical, dependable snow (pop!).

                Naturally, it has all the glory of a breeze, which once loved wonderfully. There is nothing like a breeze that once loved wonderfully.

                Lest not forget the damaged, damp demeanor of a dangerous depth boldly breathing.

                sir likes its special width. madam likes its endearing length.

                It is a beautiful love! 

                -generated https://www.plot-generator.org.uk/2p6i5a3k/what-could-this-thing-with-special-width-be.html' ,
                )

pieceStory = Story.create(
                "owner_id": user1.id,
                "title": 'Piece by Piece',
                "story_type": 'review',
                "summary": 'A Futuristic Novel',
                "username": 'Rainforest',
                "text": 

                "'Unreasonable People'
                                        
                The night of the release date changes everything for Rainforest Records, a 26-year-old musician from Los Angeles.

                One moment, she is discussing intricacies with her straightforward friend, Demo User; the next, watching with horror as unreasonable people ignore each other.

                She knows these people came from San Francisco but she can't prove it - at least not without some beautiful flowers.

                The honest, optimistic woman knows that her musical life is over. She acquires some beautiful flowers and is reborn as the hero who will save the world from unreasonable people.

                However, Rainforest finds herself troubled by her musical ideals and becomes overwhelmed with moral questions. Will her conscience allow her to do whatever is needed to stop the unreasonable people?
                                    
                -generated: https://www.plot-generator.org.uk/?i=1utb7xnl ",
                                                        )

petalsStory = Story.create(
                "owner_id": user1.id,
                "title": 'Petals All Around',
                "story_type": 'news',
                "summary": 'A Villanelle',
                "username": 'Demo User',
                "text": 
                "
                Rainforest couldn't stop thinking about the sound
                It was just so lovely and amazing
                But she could never forget the rebound

                That morning, Rainforest was shocked by the turnaround
                She had to calm herself with an overgrazing
                Rainforest couldn't stop thinking about the sound

                Later, she realised that the sound was compound
                She tried to focus on a glazing
                But she could never forget the rebound

                Demo tried to distract her with a surround
                Said it was time to start thinking about a hazing
                Rainforest couldn't stop thinking about the sound

                Rainforest took action like a hound
                The sound was like a toxic phasing
                But she could never forget the rebound

                Rainforest's demise was renowned
                Her mind turned into a phrasing
                Rainforest couldn't stop thinking about the sound
                But she could never forget the rebound

                -generated: https://www.poem-generator.org.uk/1sim5mcq/rainforests-torment-villanelle-of-sound.html     
                ",
                )


story1 = Story.create(
                "owner_id": user1.id,
                "title": 'Mostly giving',
                "story_type": 'review',
                "summary": 'Embrace.',
                "username": 'Demo User',
                "text": "
                You find so many people are unforgiving
                But you, you are mostly giving

                I like the way you give.
                You do it like live.
                I like the way you take.
                You do it like a namesake.
                I like the way you replace.
                Embrace.

                You find so many people are fighting
                But you, you are mostly exciting

                I love the way you have no hair,
                Spreading your style everywhere.
                You're like a style fountain.
                Enough zazz for a whole mountain.

                You find so many people are unforgiving
                But you, you are mostly giving

                You're the perfect person.
                You could meet a worse one.

                You find so many people are fighting
                But you, you are mostly exciting

                Giving, loving and nurturing,
                Exciting and intuitive too,
                Are the qualities of you

                You find so many people are unforgiving
                But you, you are mostly giving

                - generated: https://www.song-lyrics-generator.org.uk/1ttbnfk9/way-you-give-the-giving-loving-and-nurturing-person-song.html",
                )
story2 = Story.create(
                "owner_id": user2.id,
                "title": 'Soft Music Note Likely To Win Village Show',
                "story_type": 'news',
                "summary": 'Plot twists',
                "username": 'Rainforest Records',
                "text": "
                There are three friends, Rainforest Records, Demo User and Soft Note.
                
                
                1. Soft Note is an imaginary friend.

                2. The whole things is not a story but a brainwashing tool used by the government.

                3. It turns out Rainforest Records only exists in the cloud.

                4. The story is just one iteration of an infinite loop.

                5. Demo User was just using Rainforest Records for information.

                6. Demo User poisoned Rainforest Records at the beginning of the story, and it's taken the whole story to take effect.

                7. Rainforest Records was bitten by a vampire much earlier in the story but signs were delayed.

                8. The person claiming to be Soft Note is actually an imposter.

                9. Soft Note wasn't born but created in a lab.

                10. A perceived misfortune in Rainforest Records's past was actually set up to protect her.

                11. The entire story is a figment of Rainforest Records's imagination. She is actually in jail.

                12. The person we think is the villain is actually working for a bigger villain.

                13. Rainforest Records turns to the dark side.

                14. Rainforest Records is the villain.

                15. Rainforest Records is not really dead.

                16. Demo User has been in love with Rainforest Records all along.

                17. Soft Note is actually a zombie.

                https://www.plot-generator.org.uk/13a4vdgw/20-twist-ideas-for-adventures-of-rainforest-records.html
                ",
                )
story3 = Story.create(
                "owner_id": user1.id,
                "title": 'Large, Pink Success',
                "story_type": 'review',
                "summary": 'A Concrete Poem.',
                "username": 'Demo User',
                "text": "
                        success                                         
                    ever so pink                                      
                   positively great                                    
                  ever so successful                                   
                 good, capital, funny                                  
                good, made, prominent                                  
               good, epic, prosperous                                  
               so successful   number                                  
              quite big        friend                                  
              amusing          speaks                                  
               up to          hearts                                   
                great!        amusing                                   
                number     so great                                    
                    take   babycakes                                     
                        a returns                                       
                    successful                                        
                  my mother       hippopotamus                       
                successful    good, capital, funny                   
              successful   good, capital, prominent                 
            successful   heroic win growing, quickly               
            a success   massive lucre growing, quickly             
            babycakes   its bulky lucre growing, quickly            
            a success  larger earnings increasing, quickly          
            prominent lucre, epic returns, liberal optimism         
            liberal profits, important returns, big optimism        
            ever so prodigious net profit flourishing, quickly      
            prominent profit, high returns, important optimism      
              ever so cock-a-hoop net profit flourishing, quickly    
                important net income, bad returns, important optimism  
                  important net profit, bad returns, prominent optimism 
                    prominent earnings, important returns, large optimism
                      bad lucre, high returns, bad optimism  blood red a 
                        its heavy win increasing, quickly      so great  
                          gravid net thriving, quickly              and  
                            good, great, prosperous                     
                                extremely amusing                      
                                    rather amusing                     
                                      so successful                     
                                      people  people                    
                                        quite   number                   
                                        up to    large                   
                                        money     large                  
                                        sharp      young                 
                                        human       up to                
                                        large       number               
                                        take        large!               
                                        take      so great               
                                        begin  very pink                 
                                        so successful                    
                                        successful                       
                                      so great                          
                                    so great                            
                                  blood red                             
                                  take  big                             
                                  take  get                             
                                 cause  had                             
                                 money  rap                             
                                  pop   was                             
                                  take  are                             
                                   in   get                             
                                        get                             
                                        can                             
                                        get                             
                                        can                             
                                        young                            
                                   successful                            
                                hippopotamus                             
                                 pineapple                            
                
                -generated: https://www.poem-generator.org.uk/104xtd0g/large-pink-success.html
                
                "
                )
story4 = Story.create(
                "owner_id": user2.id,
                "title": 'Galactic Smart',
                "story_type": 'news',
                "summary": 'A Science Fiction Plot',
                "username": 'Rainforest Records',
                "text": "
                A long, long time ago in a smart, smart galaxy...

                After leaving the agile planet Pluto, a group of birds fly toward a distant speck. The speck gradually resolves into an intelligent, space library.

                Civil war strikes the galaxy, which is ruled by Spam Email, a dependable hummingbird capable of ignoring and even ghosting.

                Terrified, a necessary goldfish known as Rainforest Records flees the Empire, with her protector, Demo User.

                They head for The Emerald on the planet Mercury. When they finally arrive, a fight breaks out. User uses her smart hunger pangs to defend Rainforest.

                User and Goldfish Rainforest decide it's time to leave Mercury and steal a rocket to shoot their way out.

                They encounter a tribe of robots. User is attacked and the goldfish is captured by the robots and taken back to The Emerald.

                User must fight to save Goldfish Rainforest but when she accidentally unearths an exciting key, the entire future of the smart, agile galaxy is at stake.
                
                -generated: https://www.plot-generator.org.uk/1cqt89bn/galactic-smart-hunger-pangs-wars.html ",
                )
story5 = Story.create(
                "owner_id": user1.id,
                "title": "The Mysterious, Grateful Painter",
                "story_type": 'review',
                "summary": "A Summer's Tale",
                "username": 'Demo User',
                "text": "
                Demo User is a thoughtful painter from mysterious Hawaii. She leads a quiet life. However, all that changes when Demo books a summer holiday to airy Caymans.

                At first Demo finds Caymans very beautiful. Then there's the mysterious, grateful scupter, the person next door, who makes her feel glad.

                When the person invites her on a spend time expedition, Demo begins to realise that the person is a deeply genuine and lovable man.

                Demo knows in her heart that the person is the man for her. However, to secure her happiness, Demo must fend off the endearing writer, across the street neighbor, who wants to get his claws into the person.

                Using her smooth shells and a mutual love of love, Demo sets out to snare the person once and for all. But will the grateful painter return her affections?
                -generated: https://www.plot-generator.org.uk/1nygxkl9/mysterious-grateful-painter.html
                ",
                )
story6 = Story.create(
                "owner_id": user2.id,
                "title": "20 Prompts to Cure Writer's Block",
                "story_type": 'news',
                "summary": 'Ideas To Get You Started',
                "username": "Rainforest Records",
                "text": "
                Ideas To Get You Started
    
                1. What if your favourite pet had a super power?

                2. You're on a jury and you admire one of your fellow jurors. Why?

                3. What was the last thing you lost that never turned up? Write a story describing what happened.

                4. Look at the last message you sent. What would have happened if you'd accidentally sent it to your mum?

                5. Look into your family tree. Is there somebody nobody knows anything about? Make up an explanation.

                6. Think about your favourite teacher. If he or she was hiding a super power what would it be?

                7. Think of your last job interview or school lesson. In what way would it have been different if you were blind?

                8. Look at the nearest object to you. What would its life be like if it could understand every word you say?

                9. You find a letter from your grandmother that was never sent. Why not?

                10. Think of your favourite place by the coast. Describe the scene if the sea level were 100 metres higher.

                11. Look at the dating section in your local paper. Write a fictional account about the first date between one of the advertisers and a reader.

                12. Imagine you're a criminal. Write a letter to your partner asking for forgiveness.

                13. Google your own name. Find somebody with the same name. Write a piece describing the thoughts he/she might have whilst brushing his/her teeth.

                14. Think of a child in your life. Write a page designed to make him/her fall on the floor with laughter.

                15. What would happen if your older self met your current self?

                16. Next time you have a dream, write it down. Write a story continuing the dream.

                17. Take the names of the songs on your favourite albums. What if they were chapter headings?

                18. Imagine you can travel back in time to give yourself one piece of advice. What would it be?

                19. Imagine you're a wolf for a day. How would you spend your time?

                20. Think of a villain from history. Imagine you're trapped in a lift together.
                -generated: https://www.plot-generator.org.uk/tf4ocyn/20-prompts-to-cure-writers-block.html",
                )
story7 = Story.create(
                "owner_id": user1.id,
                "title": 'The Bright And Big Hope',
                "story_type": 'review',
                "summary": 'A Poem.',
                "username": 'Demo User',
                "text": "
                
                Whose hope is that? I think I know.
                Its owner is quite happy though.
                Full of joy like a vivid rainbow,
                I watch him laugh. I cry hello.

                He gives his hope a shake,
                And laughs until her belly aches.
                The only other sound's the break,
                Of distant waves and birds awake.

                The hope is bright, big and deep,
                But he has promises to keep,
                After cake and lots of sleep.
                Sweet dreams come to him cheap.

                He rises from his gentle bed,
                With thoughts of kittens in his head,
                He eats his jam with lots of bread.
                Ready for the day ahead.

                With thanks to the poet, Robert Frost, for the underlying structure.

                -generator: https://www.poem-generator.org.uk/10cyq711/bright-and-big-hope.html
",
                )
story8 = Story.create(
                "owner_id": user2.id,
                "title": 'Dolphin',
                "story_type": 'news',
                "summary": 'A Haiku.',
                "username": 'Rainforest Records',
                "text": "
                Beautiful leaping
                A sided, nice dolphin sings
                whilst watching the sky
                
                -generated: https://www.poem-generator.org.uk/27lfds8x/dolphin-haiku.html
                ",
                )

story9 = Story.create(
                "owner_id": user1.id,
                "title": 'Records',
                "story_type": 'review',
                "summary": 'A Didactic Cinquain.',
                "username": "Demo User",
                "text": "
                Records
                Vibey, mellow
                Recording, performing, listen
                Ever so authentic
                Music
                -generated: https://www.poem-generator.org.uk/1t01078y/records-didactic-cinquain.html",
                )

story10 = Story.create(
                "owner_id": user2.id,
                "title": 'Ode to the Inheritance.',
                "story_type": 'news',
                "summary": 'A Sonnet',
                "username": 'Rainforest Records',
                "text": "
                Inheritance, you inspire me to write.
                How I love the way you give, pass and grow,
                Invading my mind day and through the night,
                Always dreaming about the adagio.

                Let me compare you to a helpful bay?
                You are more giant, concerned and heavy.
                Earned breeze flaps the pensive dancers of May,
                And the springtime has the tensive brevi.

                How do I love you? Let me count the ways.
                I love your family and history.
                Thinking of your heritage fills my days.
                My love for you is the grown mystery.

                Now I must away with a pliant heart,
                Remember my burned words whilst we're apart

                -generated: https://www.poem-generator.org.uk/kf5862s/ode-to-inheritance.html
",
                )
puts "14 stories created!"
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


