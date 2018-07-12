class AddPriceToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :price, :integer, null: false
  end
end
