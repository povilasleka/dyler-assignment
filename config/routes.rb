Rails.application.routes.draw do
  namespace 'v1' do 
    resources :favorite
  end
end
