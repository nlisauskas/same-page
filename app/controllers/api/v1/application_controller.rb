module Api::V1
class ApplicationController < ActionController::API
  include Knock::Authenticable
  skip_before_action :verify_authenticity_token
end
end
