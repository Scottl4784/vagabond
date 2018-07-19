class Api::ReviewsController < ApplicationController
    def index
        @reviews = City.find(params[:city_id]).reviews
        render json: @reviews
    end
    
    def create
        @city = City.find(params[:city_id])
        @review = @city.reviews.create(review_params)
        render json: @review
    end
    
    def show
        @review = City.find(params[:city_id]).reviews.find(params[:id]) 
        render json: @review
    end
    
    def update
        @review = City.find(params[:city_id]).reviews.find(params[:id])
        @review.update!(review_params)
        render json: @review
    end
    
    def destroy
        @review = Review.find(params[:id]).delete 
        @reviews = Review.all
        render json: @reviews
    end
    
    private
    
    def review_params
        params.require(:review).permit(:title, :author, :date, :comment)
    end
end
