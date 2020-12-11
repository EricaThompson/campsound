class Api::UsersController < ApplicationController
    def new 
        @user = User.new 
        render :new 
    end

    def create
        @user = User.new(user_params)
        @user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/tape.png"), filename: "tape.png")
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        if @user 
            render :show 
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def index
        @users = User.all
        render :index
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
