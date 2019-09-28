class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :birthdate
  has_many :projects
end
