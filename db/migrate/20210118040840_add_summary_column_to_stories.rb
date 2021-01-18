class AddSummaryColumnToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :summary, :string
  end
end
