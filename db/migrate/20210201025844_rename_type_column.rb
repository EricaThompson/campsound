class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change

    rename_column :users, :type, :user_type
  end
end
