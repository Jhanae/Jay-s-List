Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :products, only:[:index, :show, :create]
  resources :profiles, only:[:show, :create, :update, :destroy, :index] 
  resources :users, only:[:create, :show, :index]

  post '/login', to: 'auth#login'

  post '/cart_items', to: 'cart_items#create'
  get '/cart_items/:id', to: 'cart_items#show'
  get '/cart_items', to: 'cart_items#index'
  patch '/cart_items/:id', to: 'cart_items#update'
  delete '/cart_items/:id', to: 'cart_items#destroy'

  # get '/profiles', to: 'profile#index'
end
