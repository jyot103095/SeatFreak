class AddIndexToTrackings < ActiveRecord::Migration[5.2]
  def change
  	add_index :trackings, [:trackable_type, :trackable_id]
  end
end
