class AddPasswordDigestToTenants < ActiveRecord::Migration[5.2]
  def change
    add_column :tenants, :password_digest, :string
  end
end
