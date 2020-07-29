Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  get 'projects/index'
  resources :projects, only: [:index]

  get 'Home', to: 'homepage#index'
  get 'Projects', to: 'homepage#index'
  get 'Blog', to: 'homepage#index'

end
