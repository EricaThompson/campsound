class Api::ItemsController < ApplicationController
    def new
        @item = Item.new
        render :new
    end

    def create
        @item = Item.new(item_params)
        if @item.save
            render :show
        else
            render json: @item.errors.full_messages, status: 401
        end
    end

    def show
        @item = Item.find(params[:id])
        
        if @item
            render :show
        else
            render json: @item.errors.full_messages, status: 404
        end
    end
    
    def index
        debugger
        if params[:user_id]
            # active record
            @items = Item.where(owner_id: params[:user_id])
        elsif !request.query_string.blank?
            req = request.query_string
            @items = Item.where("genre ~ ?", req)
            # @items = Item.where(genre: params[:genre])
        else
            @items = Item.all
        end
        
        render :index
    end

    def edit
        @item = Item.find(params[:id])
        render :edit
    end

    def update
        @item = Item.find(params[:id])
        if @item.update(item_params)
            render :show
        else
            render json: @item.erros.full_messages, status: 401
        end
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy if current_user.id == item.owner_id
        render :index
    end

    private
    def item_params
        params.require(:item).permit(
            :owner_id, 
            :title, 
            :genre, 
            :price, 
            :released, 
            :about, 
            :collection_id,
            :cover,
            :song
        )
    end
end
