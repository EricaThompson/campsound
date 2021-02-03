# json.array! @items

@items.each do |item|
    json.set! item.id do
        json.id item.id
        json.title item.title
        json.owner_id item.owner_id
        # json.artist item.artist.username
        json.artist item.artist_name
        json.genre item.genre
        json.date item.created_at.strftime("%b %Y")
        json.timestamp item.created_at
        json.about item.about
        json.cover url_for(item.cover)
        json.song url_for(item.song)
        # json.summary item.summary
    end
end