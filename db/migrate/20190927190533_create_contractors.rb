class CreateContractors < ActiveRecord::Migration[5.2]
  def change
    create_table :contractors do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.datetime :birthdate

      t.timestamps
    end
  end
end
