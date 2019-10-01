module Api::V1
class TenantTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
end
end
