Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :cities do
      resources :reviews
    end
  end
end
