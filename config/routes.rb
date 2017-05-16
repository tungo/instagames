Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
  end
end
