class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :genre
      t.string :price
      t.boolean :released, null: false
      t.text :about
      t.integer :collection_id
      t.timestamps
    end
    add_index :items, :owner_id
    add_index :items, :title, unique: true
  end
end
