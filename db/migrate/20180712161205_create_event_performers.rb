class CreateEventPerformers < ActiveRecord::Migration[5.2]
  def change
    create_table :event_performers do |t|
      t.integer :event_id, null: false
      t.integer :performer_id, null: false

      t.timestamps
    end

    add_index :event_performers, :event_id
    add_index :event_performers, :performer_id
  end
end
