class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :story_type, null: false
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.text :story, null: false
      t.timestamps
    end
    add_index :stories, :owner_id
  end
end
