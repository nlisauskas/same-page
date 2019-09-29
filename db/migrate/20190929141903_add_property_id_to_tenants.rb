class AddPropertyIdToTenants < ActiveRecord::Migration[5.2]
  def change
    add_column :tenants, :property_id, :integer
  end
end
