class Business < ApplicationRecord
  validates :name, :address, :state, :city, :zip_code, :phone_number, :website, :price_range, :business_hours, :latitude, :longitude, presence: true
  
  has_many :reviews
  
  has_many_attached :photos

  def average_rating
    reviews.average(:rating)
  end
end

