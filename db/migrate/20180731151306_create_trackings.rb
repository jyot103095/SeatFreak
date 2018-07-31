class CreateTrackings < ActiveRecord::Migration[5.2]
  def change
    create_table :trackings do |t|
      t.integer :item_id, null: false
      t.string :item_type, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :trackings, :item_id
    add_index :trackings, :user_i
  end
end
