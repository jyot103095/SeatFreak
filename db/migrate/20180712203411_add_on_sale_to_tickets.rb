class AddOnSaleToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :on_sale, :boolean, default: false
  end
end
