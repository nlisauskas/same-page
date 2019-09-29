class RemovePasswordFromInvestors < ActiveRecord::Migration[5.2]
  def change
    remove_column :investors, :password, :string
    remove_column :investors, :password_confirmation, :string
  end
end
