class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zip_code, null: false
      t.integer :phone_number, null: false
      t.string :website, null: false
      t.string :price_range, null: false
      t.string :business_hours, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end
  end
end
