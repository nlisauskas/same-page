Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :projects do
        resources :properties
        resources :investors
        resources :tenants
      end
      resources :expenses
      resources :incomes
      resources :payments
      resources :properties
      resources :investors do
        resources :properties
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
