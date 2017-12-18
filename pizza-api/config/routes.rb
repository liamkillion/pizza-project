Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :toppings
      resources :pizzas
    end
  end
end
