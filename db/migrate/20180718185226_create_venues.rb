class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :address, null: false
      t.string :description
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
