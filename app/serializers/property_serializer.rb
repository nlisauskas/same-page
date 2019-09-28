class PropertySerializer < ActiveModel::Serializer
  attributes :id, :street_1, :street_2, :city, :state, :zipcode, :investor_id, :purchase_date, :sale_date, :purchase_price, :sale_price
  has_many :incomes
  has_many :expenses
  has_many :projects
  has_many :tenants
  belongs_to :investor
end
