json.extract! @item, :id, :owner_id, :title, :genre, :price, :released, :about, :collection_id, :artist_name, :created_at
json.song url_for(@item.song)
json.cover url_for(@item.cover)
json.date @item.created_at.strftime("%B %d, %Y")


# if @item.song.present?
#     json.song url_for(@item.song)
# end
