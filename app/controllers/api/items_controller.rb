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
        @items = Item.all
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
            :song
        )
    end
end
