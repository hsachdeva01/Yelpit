json.array! @reviews.each do |review|
    json.partial! '/api/reviews/review', review: review
    json.extract! review.business, :name
    json.extract! review.user, :first_name, :last_name
end
