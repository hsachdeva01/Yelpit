json.partial! "api/businesses/business", business: @business
json.photoUrls @business.photos.map { |file| url_for(file) }

@business.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :email
    end
  end
end