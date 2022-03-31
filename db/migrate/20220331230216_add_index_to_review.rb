class AddIndexToReview < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :body, unique: true
  end
end
