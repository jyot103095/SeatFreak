Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :tickets, only: [:update]
    resources :performers, only: [:show]
    resources :events, only: [:index, :show]
  end

  patch '/api/tickets/:id/buy', to: 'api/tickets#buy'
  patch '/api/tickets/:id/sell', to: 'api/tickets#sell'
end
