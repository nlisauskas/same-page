class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :category, :contractor_id, :payment_id, :property_id, :start_date, :end_date, :claim_id
end
