class AddArtistNameToItemsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :artist_name, :string
    add_index :items, :artist_name
  end
end
