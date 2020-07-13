class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    render "/api/businesses/index"
  end


  def show 
    @business = Business.find_by(id: params[:id])
    if @business
      render json: :show
    else
      render json: ["This business does not exist!"]
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :zip_code, :state, :city, :phone_number, :website, :price_range, :business_hours, :latitude, :logitude, photos: [])
  end
end
