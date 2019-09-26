class Property < ApplicationRecord
  has_many :incomes
  has_many :expenses
  has_many :projects
  has_many :tenants
  belongs_to :investor
end
