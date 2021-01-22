@users.each do |user|
    json.set! user.id do
        json.link user.link
        json.bio user.bio
        json.location user.location
        # json.artist user.artist.username
        # json.artist user.artist_name
        # json.genre user.genre
        # json.date user.created_at.strftime("%b %Y")
        json.userImg url_for(user.user_img)
        # json.cover url_for(user.cover)
        # json.song url_for(user.song)
    end
end