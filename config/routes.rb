Rails.application.routes.draw do
  namespace 'v1' do 
    resources :favorite, only: [:show, :create, :destroy, :update]
  end
end
