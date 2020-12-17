class Api::SearchController < ApplicationController
    def index
        if !request.query_string.blank?
            @items = Item.where(genre: "LIKE request.query_string" )
        else
            @items = Item.all
        end

        render :index
    end

end
