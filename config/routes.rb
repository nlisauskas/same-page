Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :projects
      resources :expenses
      resources :incomes
      resources :payments
      resources :properties
      resources :investors
      resources :tenants
    end
  end

end
