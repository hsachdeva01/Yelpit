json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.user do
  json.partial! '/api/users/user', user: @review.user
end

json.average_rating @review.business.average_rating

json.review do
  json.extract! @review, :id, :author_id, :comment_ids
end


json.comments do 
  @review.comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :user_id, :review_id, :content
    end
  end
end