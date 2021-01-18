class AddUsernameToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :username, :string
  end
end
