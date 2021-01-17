class ChangeStoryToText < ActiveRecord::Migration[5.2]
  def change
    rename_column :stories, :story, :text
  end
end
