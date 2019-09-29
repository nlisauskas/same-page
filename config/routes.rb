Rails.application.routes.draw do

  post 'tenant_token' => 'tenant_token#create'
  post 'contractor_token' => 'contractor_token#create'
  post 'investor_token' => 'investor_token#create'
  namespace :api do
    namespace :v1 do
      resources :projects do
        resources :properties
        resources :investors
        resources :contractors
        resources :tenants
      end
      resources :expenses
      resources :contractors
      resources :incomes
      resources :payments
      resources :properties
      resources :investors do
        resources :properties
        resources :contractors
        resources :tenants
        resources :projects
        resources :payments
      end
      resources :tenants do
        resources :investors
        resources :payments
        resources :projects
        resources :properties
      end
    end
  end

end
