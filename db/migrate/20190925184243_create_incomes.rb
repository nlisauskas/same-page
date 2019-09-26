class CreateIncomes < ActiveRecord::Migration[5.2]
  def change
    create_table :incomes do |t|
      t.string :source
      t.float :amount
      t.integer :investor_id
      t.integer :tenant_id
      t.integer :contractor_id
      t.integer :property_id
      t.integer :project_id
      t.boolean :recurring
      t.string :frequency
      t.string :description

      t.timestamps
    end
  end
end
