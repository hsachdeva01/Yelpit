@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business
    json.reviewIds business.reviews.map { |rev| rev.id}
    json.reviewText business.reviews[0]
    json.photoUrls business.photos.map { |file| url_for(file) }
  end
end
