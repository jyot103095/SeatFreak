class RemoveTypeAndAddClassificationToPerformers < ActiveRecord::Migration[5.2]
  def change
    remove_column :performers, :type
    add_column :performers, :classification, :string, null: false
  end
end
