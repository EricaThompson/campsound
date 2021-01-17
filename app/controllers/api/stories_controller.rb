class Api::StoriesController < ApplicationController
def new
        @story = Story.new
        render :new
    end

    def create
        @story = Story.new(item_params)
        if @story.save
            render :show
        else
            render json: @story.errors.full_messages, status: 401
        end
    end

    def show
        @story = Story.find(params[:id])
        
        if @story
            render :show
        else
            render json: @story.errors.full_messages, status: 404
        end
    end
    
    def index
        # debugger
        if params[:user_id]
            # active record
            @stories = Story.where(owner_id: params[:user_id])
        elsif params['genre']
            @stories = Story.where('genre ~ ?', params['genre'])
        elsif params['any']
            @stories = Story.where('artist_name ~ ?', params['any']).or(Item.where('title ~ ?', params['any']))
        #     @storys = Item.where('title ~ ?', params['any'] 'or artist_name ~ ?', params['any'])
        # elsif !request.query_string.blank?
        #     @storys = Item.where(' ~ ?', request.query_string)
        else
            @stories = Story.all
        end
        
        render :index
    end
    

    def edit
        @story = Story.find(params[:id])
        render :edit
    end

    def update
        @story = Item.find(params[:id])
        if @story.update(item_params)
            render :show
        else
            render json: @story.erros.full_messages, status: 401
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
            :song,
            :artist_name,
            :id
            # remove from schema :bio
        )
    end

end
