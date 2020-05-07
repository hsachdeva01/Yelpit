class Review < ApplicationRecord

  validates :body, :rating, presence: true
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business
end
