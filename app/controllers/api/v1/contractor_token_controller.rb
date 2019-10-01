module Api::V1
class ContractorTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
end
end
