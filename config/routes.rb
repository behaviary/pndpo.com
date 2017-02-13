Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html   
    root 'static_pages#home'
    get 'home', to: 'static_pages#home'
    get 'resume', to: 'static_pages#resume'
end
