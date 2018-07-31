Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :tickets, only: [:index, :update]
    resources :performers, only: [:show]
    resources :venues, only: [:index, :show]
    resources :events, only: [:index, :show]
    resources :search, only: [:index]
    resources :trackings, only: [:create]
  end

  delete '/api/trackings', to 'api/trackings#destroy'
  patch '/api/tickets/:id/buy', to: 'api/tickets#buy'
  patch '/api/tickets/:id/sell', to: 'api/tickets#sell'
  get '/api/performers/:category/events', to: 'api/performers#show_category'
end
