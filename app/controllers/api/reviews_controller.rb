class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end
  
  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create 
    @review = Review.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :author_id :business_id)
  end
end
