Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:     'users/sessions',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }
  root 'feeds#index'
end
