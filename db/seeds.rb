# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all

user1 = User.create!({first_name: "Gordon", last_name: "Ramsey", email: "masterchef@chef.com", password: "password", zip_code: 12345})
user2 = User.create!({first_name: "test", last_name: "test", email: "test@gmail.com", password: "password", zip_code: 12345})
user3 = User.create!({first_name: "Yelpit", last_name: "Demo", email: "yelpit@yelpit.com", password: "password", zip_code: 93441})



cotogna = Business.create!({name: "Cotogna", 
address: "490 Pacific Ave", state: "CA", city: "San Francisco", 
zip_code: 94133, phone_number: "4157758508", website: "https://cotognasf.com/", 
price_range: "$$$", business_hours: "11:30 am - 9:00 pm", 
latitude: 37.7974, longitude: -122.4036})


appAcademy = Business.create!({name: "App Academy", 
address: "825 Battery St", state: "CA", city: "San Francisco", 
zip_code: 94111, phone_number: "4154171991", website: "https://www.appacademy.io/", 
price_range: "$$$", business_hours: "Open 24 Hours", 
latitude: 37.7990, longitude: -122.4014})


thePinkElephantAlibi = Business.create!({name: "The Pink Elephant Alibi", 
address: "142 Minna St", state: "CA", city: "San Francisco", 
zip_code: 94105, phone_number: "4158729379", website: "pinkelephantusa.com", 
price_range: "$$", business_hours: "11:00 am - 10:00 pm", 
latitude: 37.6016, longitude: -121.7195})

limoncello = Business.create!({name: "Limoncello", 
address: "1400 Sutter St", state: "CA", city: "San Francisco", 
zip_code: 94109, phone_number: "4156386361", website: "web.ineons.com/limoncello", 
price_range: "$$", business_hours: "10:00 am - 7:00 pm", 
latitude: 37.7875, longitude: -122.4237})

cotogna_photo1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna.jpg")
cotogna.photos.attach(io: cotogna_photo1 , filename: "cotogna.jpg")

cotogna_photo2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotonga2.jpg")
cotogna.photos.attach(io: cotogna_photo2 , filename: "cotogna2.jpg")

cotogna_photo3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna3.jpeg")
cotogna.photos.attach(io: cotogna_photo3 , filename: "cotogna3.jpg")

cotogna_photo4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna4.jpg")
cotogna.photos.attach(io: cotogna_photo4 , filename: "cotogna4.jpg")

app_academy_photo1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/app-academy-open.png")
appAcademy.photos.attach(io: app_academy_photo1, filename: "app-academy-open.png")

pink_elephant_photo1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/theElephant.jpeg")
thePinkElephantAlibi.photos.attach(io: pink_elephant_photo1 , filename: "theElephant.jpeg")

pink_elephant_photo2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/theelephant2.jpg")
thePinkElephantAlibi.photos.attach(io: pink_elephant_photo2 , filename: "theElephant2.jpeg")

pink_elephant_photo3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/thelephant3.jpg")
thePinkElephantAlibi.photos.attach(io: pink_elephant_photo3 , filename: "theElephant3.jpeg")

pink_elephant_photo4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/theelephant4.jpg")
thePinkElephantAlibi.photos.attach(io: pink_elephant_photo4 , filename: "theElephant4.jpeg")

limoncello_photo1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/Limoncello.jpg")
limoncello.photos.attach(io: limoncello_photo1, filename: "Limoncello.jpg")

limoncello_photo2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/limoncello2.jpeg")
limoncello.photos.attach(io: limoncello_photo2, filename: "limoncello2.jpg")

limoncello_photo3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/limoncello3.jpg")
limoncello.photos.attach(io: limoncello_photo3, filename: "limoncello3.jpg")

limoncello_photo4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/limoncello4.jpg")
limoncello.photos.attach(io: limoncello_photo4, filename: "limoncello4.jpg")
