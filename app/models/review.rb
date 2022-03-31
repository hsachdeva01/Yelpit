class Review < ApplicationRecord

  validates :body, :rating, presence: true, uniqueness: true
  
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business

  has_many :comments,
  foreign_key: :review_id,
  class_name: :Comment,
  dependent: :destroy
  
end
