# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#          api_search_index GET    /api/search(.:format)                                                                    api/search#index {:format=>:json}
#                api_search GET    /api/search/:id(.:format)                                                                api/search#show {:format=>:json}
#                 api_items GET    /api/items(.:format)                                                                     api/items#index {:format=>:json}
#               api_stories GET    /api/stories(.:format)                                                                   api/stories#index {:format=>:json}
#            api_user_items GET    /api/users/:user_id/items(.:format)                                                      api/items#index {:format=>:json}
#                           POST   /api/users/:user_id/items(.:format)                                                      api/items#create {:format=>:json}
#             api_user_item GET    /api/users/:user_id/items/:id(.:format)                                                  api/items#show {:format=>:json}
#                           PATCH  /api/users/:user_id/items/:id(.:format)                                                  api/items#update {:format=>:json}
#                           PUT    /api/users/:user_id/items/:id(.:format)                                                  api/items#update {:format=>:json}
#                           DELETE /api/users/:user_id/items/:id(.:format)                                                  api/items#destroy {:format=>:json}
#          api_user_stories GET    /api/users/:user_id/stories(.:format)                                                    api/stories#index {:format=>:json}
#                           POST   /api/users/:user_id/stories(.:format)                                                    api/stories#create {:format=>:json}
#            api_user_story GET    /api/users/:user_id/stories/:id(.:format)                                                api/stories#show {:format=>:json}
#                           PATCH  /api/users/:user_id/stories/:id(.:format)                                                api/stories#update {:format=>:json}
#                           PUT    /api/users/:user_id/stories/:id(.:format)                                                api/stories#update {:format=>:json}
#                           DELETE /api/users/:user_id/stories/:id(.:format)                                                api/stories#destroy {:format=>:json}
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#               api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
#                           DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :search, only: [:index, :show]
    resources :items, only: [:index]
    resources :stories, only: [:index]
    resources :users, only: [:create, :index, :show, :update] do 
      resources :items, only: [:index, :create, :show, :update, :destroy]
      resources :stories, only: [:create, :index, :show, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
