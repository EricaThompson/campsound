@stories.each do |story|
    json.set! story.id do
        json.id story.id
        json.title story.title
        # json.artist story.artist.username
        # json.artist story.artist_name
        # json.genre story.genre
        json.date story.created_at.strftime("%b %Y")
        # json.cover url_for(story.cover)
        # json.song url_for(story.song)
    end
end