class AddEmailToInvestors < ActiveRecord::Migration[5.2]
  def change
    add_column :investors, :email, :string
    add_column :investors, :password, :string
    add_column :investors, :password_confirmation, :string
  end
end
