json.extract! @item, :id, :owner_id, :title, :genre, :price, :released, :about, :collection_id

if @item.song.present?
    json.song url_for(@item.song)
end
