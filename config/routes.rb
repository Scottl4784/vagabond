Rails.application.routes.draw do
  namespace :api do
    resources :cities do
      resources :reviews
    end
  end
end
