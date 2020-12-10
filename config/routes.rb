# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_items GET    /api/items(.:format)                                                                     api/items#index {:format=>:json}
#                           POST   /api/items(.:format)                                                                     api/items#create {:format=>:json}
#              new_api_item GET    /api/items/new(.:format)                                                                 api/items#new {:format=>:json}
#             edit_api_item GET    /api/items/:id/edit(.:format)                                                            api/items#edit {:format=>:json}
#                  api_item GET    /api/items/:id(.:format)                                                                 api/items#show {:format=>:json}
#                           PATCH  /api/items/:id(.:format)                                                                 api/items#update {:format=>:json}
#                           PUT    /api/items/:id(.:format)                                                                 api/items#update {:format=>:json}
#                           DELETE /api/items/:id(.:format)                                                                 api/items#destroy {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
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
    resources :items
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
