class ChangeColNamesInTrackings < ActiveRecord::Migration[5.2]
  def change
  	remove_column :trackings, :item_type
  	remove_column :trackings, :item_id
  	add_column :trackings, :trackable_type, :string, null: false
  	add_column :trackings, :trackable_id, :integer, null: false
  end
end
