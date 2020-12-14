json.extract! @item, :id, :owner_id, :title, :genre, :price, :released, :about, :collection_id
json.track url_for(@item.song)