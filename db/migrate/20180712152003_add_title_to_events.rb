class AddTitleToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :title, :string, null: false
  end
end
