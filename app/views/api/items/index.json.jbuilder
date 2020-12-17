# json.array! @items

@items.each do |item|
    json.set! item.id do
        json.id item.id
        json.title item.title
        # json.artist item.artist.username
        json.artist item.artist_name
        json.genre item.genre
        json.cover url_for(item.cover)
        json.song url_for(item.song)
    end
end