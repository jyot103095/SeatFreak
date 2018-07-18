class AddVenuesToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :venue_id, :integer, null: false
    add_index :events, :venue_id
  end
end
