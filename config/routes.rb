Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      get '/photos', to: 'photos#user', as: 'photo'
    end
    resource :session, only: [:create, :destroy]

    resources :photos, only: [:index, :create, :show, :update, :destroy]
  end
end
