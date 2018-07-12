class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.time :time, null: false

      t.timestamps
    end
  end
end
