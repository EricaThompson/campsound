class MakeChangesToItemsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :items, :title
    add_index :items, :title
  end
end
