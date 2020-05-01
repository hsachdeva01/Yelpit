# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!([{first_name: "Gordon", last_name: "Ramsey", email: "masterchef@chef.com", password: "password", zip_code: 12345}])
user2 = User.create!({first_name: "test", last_name: "test", email: "test@gmail.com", password: "password", zip_code: 12345})
user3 = User.create!({first_name: "Yelpit", last_name: "Demo", email: "yelpit@yelpit.com", password: "password", zip_code: 93441})



cotogna = Business.create!([{name: "Cotogna", 
address: "490 Pacific Ave", state: "CA", city: "San Francisco", 
zip_code: 94133, phone_number: "4157758508", website: "https://cotognasf.com/", 
price_range: "$$$", business_hours: "11:30AM to 9PM", 
latitude: 37.7974, longitude: 122.4036}])
