class AddBioToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :bio, :text
  end
end
