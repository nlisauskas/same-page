class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :birthdate
  has_many :properties
  has_many :incomes, through: :properties
  has_many :expenses, through: :properties
  has_many :projects, through: :properties
  has_many :tenants, through: :properties
end
