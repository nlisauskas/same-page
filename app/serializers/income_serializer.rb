class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :source, :amount, :investor_id, :tenant_id, :contractor_id, :property_id, :project_id, :recurring, :frequency, :description
  belongs_to :property
end
