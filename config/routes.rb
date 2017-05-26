Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :index] do
      get 'photos', to: 'photos#user', as: 'photos'
      get "search", on: :collection

      resources :follows, only: [:create]
      delete 'follows', to: 'follows#destroy'
      get 'following', to: 'follows#following', as: 'following'
      get 'followers', to: 'follows#followers', as: 'followers'
    end
    resource :session, only: [:create, :destroy]

    resources :photos, only: [:index, :create, :show, :destroy] do
      resources :likes, only: [:create]
      delete 'likes', to: 'likes#destroy'
    end

    resources :comments, only: [:create, :destroy]
  end
end
