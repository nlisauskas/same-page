class AddEmailToTenants < ActiveRecord::Migration[5.2]
  def change
    add_column :tenants, :email, :string
    add_column :tenants, :password, :string
    add_column :tenants, :password_confirmation, :string
  end
end
