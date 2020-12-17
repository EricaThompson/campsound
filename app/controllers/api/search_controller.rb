class Api::SearchController < ApplicationController
    def index
        @items Item.all

        render :index
    end

    def show
        if !request.query_string.blank?
            @items = Item.where(genre: "LIKE request.query_string" )
        else
            @items = Item.all
        end
    end

end
