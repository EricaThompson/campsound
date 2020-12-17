json.extract! @item, :id, :owner_id, :title, :genre, :price, :released, :about, :collection_id, :artist_name
json.song url_for(@item.song)
json.cover url_for(@item.cover)

# if @item.song.present?
#     json.song url_for(@item.song)
# end
