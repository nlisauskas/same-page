class RemovePasswordFromTenants < ActiveRecord::Migration[5.2]
  def change
    remove_column :tenants, :password, :string
    remove_column :tenants, :password_confirmation, :string
  end
end
