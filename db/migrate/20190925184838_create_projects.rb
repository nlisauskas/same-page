class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :description
      t.string :category
      t.integer :contractor_id
      t.integer :payment_id
      t.integer :property_id
      t.datetime :start_date
      t.datetime :end_date
      t.integer :claim_id

      t.timestamps
    end
  end
end
