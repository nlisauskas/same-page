module Api::V1
class TenantsController < ApplicationController
  before_action :set_tenant, only: [:show, :update, :destroy]
  before_action :authenticate_tenant,  only: [:index, :current, :update, :destroy]

  # GET /tenants
  def index
    @tenants = Tenant.all

    render json: @tenants
  end

  # GET /tenants/1
  def show
    render json: @tenant
  end

  # POST /tenants
  def create
    if Tenant.find_by(:email => tenant_params[:email])
      render json: "This account already exists", status: :unprocessable_entity
    else
    @tenant = Tenant.new(tenant_params)

    if @tenant.save
      render json: @tenant, status: :created
    else
      render json: @tenant.errors, status: :unprocessable_entity
    end
  end
  end

  # PATCH/PUT /tenants/1
  def update
    if @tenant.update(tenant_params)
      render json: @tenant
    else
      render json: @tenant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tenants/1
  def destroy
    @tenant.destroy
  end

  def current
    render json: current_tenant
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tenant
      @tenant = Tenant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tenant_params
      params.require(:tenant).permit(:first_name, :last_name, :email, :gender, :birthdate, :password_confirmation, :password)
    end
end
end
