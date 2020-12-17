@items.each do |item|
    json.set! item.id do
        json.id item.id
        json.title item.title
        json.artist item.artist
        # json.cover url_for(item.cover)
        # json.song url_for(item.song)
    end
end