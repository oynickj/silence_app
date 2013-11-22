SilenceApp::Application.routes.draw do

  get "lambs/index"

  get "lambs/create"

  get "lambs/update"

  root to: "lambs#index"

  resources :lambs, :only => [:index, :create, :update]
end
