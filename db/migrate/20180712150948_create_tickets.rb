class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.integer :section, null: false
      t.integer :row
      t.integer :seat

      t.timestamps
    end

    add_index :tickets, :user_id
    add_index :tickets, :event_id
  end
end
