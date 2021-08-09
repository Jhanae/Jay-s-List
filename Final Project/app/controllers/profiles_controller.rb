class ProfilesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    def create
        profile = Profile.create(profile_params)
        if profile.valid?
            render json: profile, status: :created
        else
            render json: {"errors:" => profile.errors.full_messages}
        end
    end

    def show
        profile = Profile.find_by(id: params[:id])
        render json: profile, :include => {:products => {only: [ :id, :name, :price, :quantity, :image ] }}, status: :ok
    end

    def update
        profile = Profile.find_by(id: params[:id])
        profile.update(profile_params)
        if profile.valid?
            render json: profile
        else
            render json: {"error:" => profile.errors.full_messages} 
        end  
    end

    def destroy
        profile = Profile.find_by(id: params[:id])
        profile.destroy
        head :no_content            
    end

    def index
        profile = Profile.all
        render json: profile
    end

    private
    def profile_params
        params.permit(:user_id, :location, :profile_picture, :gender, :bio, :username)
    end
    
    def render_not_found(invalid)
        render json: { "error:" => "Profile not found"}, status: :not_found
    end
end
