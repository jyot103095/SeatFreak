class CreatePerformers < ActiveRecord::Migration[5.2]
  def change
    create_table :performers do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :category, null: false
      t.text :description

      t.timestamps
    end
  end
end
