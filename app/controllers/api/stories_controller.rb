class Api::StoriesController < ApplicationController
def new
        @story = Story.new
        render :new
    end

    def create
        @story = Story.new(story_params)
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
            @stories = Story.where('artist_name ~ ?', params['any']).or(Story.where('title ~ ?', params['any']))
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
        @story = Story.find(params[:id])
        if @story.update(story_params)
            render :show
        else
            render json: @story.erros.full_messages, status: 401
        end
    end

    def destroy
        story = Story.find_by(id: params[:id])
        story.destroy if current_user.id == story.owner_id
        render :index
    end

    private
    def story_params
        params.require(:story).permit(
            :owner_id, 
            :title, 
            :story_type,
            :text,
            :id,
            :summary
        )
    end

end
