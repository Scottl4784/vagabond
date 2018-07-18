Rails.application.routes.draw do
  root :to => "/" render html: "Hello"
  namespace :api do
    resources :users
    resources :cities do
      resources :reviews
    end
  end
end
