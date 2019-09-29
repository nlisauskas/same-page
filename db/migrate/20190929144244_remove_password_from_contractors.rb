class RemovePasswordFromContractors < ActiveRecord::Migration[5.2]
  def change
    remove_column :contractors, :password, :string
    remove_column :contractors, :password_confirmation, :string
  end
end
