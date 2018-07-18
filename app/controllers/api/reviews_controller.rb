class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render json: @reviews
    end
    
    def create
        @city = City.find(params[:city_id])
        @review = @city.reviews.create!(review_params)
        render json: @review
    end
    
    def show
        @city = City.find(params[:city_id])
        @review = Review.find(params[:id])   
        render json: @review
    end
    
    def update
        @city = City.find(params[:city_id])
        @review = Review.find(params[:id])
        @review.update!(review_params)
        render json: @review
    end
    
    def destroy
        @review = Review.find(params[:id]).delete  
        render status: :ok
    end
    
    private
    
    def review_params
        params.require(:review).permit(:title, :author, :date, :comment, :city_id, :user_id)
    end
end
