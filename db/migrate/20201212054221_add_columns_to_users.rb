class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :type, :string
    add_column :users, :link, :string
    add_column :users, :bio, :text
    add_column :users, :location, :text
  end
end
