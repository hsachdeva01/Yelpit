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

cafeClaude = Business.create!({name: "Cafe Claude", 
address: "7 Claude Ln", state: "CA", city: "San Francisco", 
zip_code: 94108, phone_number: "4153923505", website: "cafeclaude.com", 
price_range: "$$$", business_hours: "11:30 am - 10:00 pm", 
latitude: 37.7902, longitude: -122.4043})

wayfareTavern = Business.create!({name: "Wayfare Tavern", 
address: "558 Sacramento St", state: "CA", city: "San Francisco", 
zip_code: 94111, phone_number: "4157729060", website: "wayfaretavern.com", 
price_range: "$$$", business_hours: "11:00 am - 11:00 pm", 
latitude: 37.7940, longitude: -122.4023})

viewLounge = Business.create!({name: "The View Lounge", 
address: "780 Mission St", state: "CA", city: "San Francisco", 
zip_code: 94103, phone_number: "4154426003", website: "sfviewlounge.com", 
price_range: "$$$", business_hours: "04:00 am - 12:00 pm", 
latitude: 37.7850, longitude: -122.4040})

Amber = Business.create!({name: "Amber", 
address: "25 Yerba Buena Ln", state: "CA", city: "San Francisco", 
zip_code: 94103, phone_number: "4157770500", website: "amber-india.com", 
price_range: "$$$", business_hours: "11:30 am - 10:00 pm", 
latitude: 37.7857, longitude: -122.4046})



cotogna_photo1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna.jpg")
cotogna.photos.attach(io: cotogna_photo1 , filename: "cotogna.jpg")

cotogna_photo2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotonga2.jpg")
cotogna.photos.attach(io: cotogna_photo2 , filename: "cotogna2.jpg")

cotogna_photo3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna3.jpeg")
cotogna.photos.attach(io: cotogna_photo3 , filename: "cotogna3.jpg")

cotogna_photo4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cotogna4.jpg")
cotogna.photos.attach(io: cotogna_photo4 , filename: "cotogna4.jpg")

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

cafeclaude1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cafeclaude1.jpeg")
cafeClaude.photos.attach(io: cafeclaude1, filename: "cafeclaude1.jpg")

cafeclaude2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cafeclaude2.jpeg")
cafeClaude.photos.attach(io: cafeclaude2, filename: "cafeclaude2.jpg")

cafeclaude3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cafeclaude3.jpeg")
cafeClaude.photos.attach(io: cafeclaude3, filename: "cafeclaude3.jpg")

cafeclaude4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/cafeclaude3.jpeg")
cafeClaude.photos.attach(io: cafeclaude4, filename: "cafeclaude4.jpg")

wayfareTavern1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/wayfareTavern1.jpeg")
wayfareTavern.photos.attach(io: wayfareTavern1, filename: "wayfareTavern1.jpg")

wayfareTavern2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/wayfareTavern2.jpeg")
wayfareTavern.photos.attach(io: wayfareTavern2, filename: "wayfareTavern2.jpg")

wayfareTavern3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/wayfareTavern3.jpeg")
wayfareTavern.photos.attach(io: wayfareTavern3, filename: "wayfareTavern3.jpg")

wayfareTavern4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/wayfareTavern4.jpeg")
wayfareTavern.photos.attach(io: wayfareTavern4, filename: "wayfareTavern4.jpg")

viewLounge1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/viewLounge1.jpeg")
viewLounge.photos.attach(io: viewLounge1, filename: "viewLounge1.jpg")

viewLounge2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/viewLounge2.jpeg")
viewLounge.photos.attach(io: viewLounge2, filename: "viewLounge2.jpg")

viewLounge3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/viewLounge3.jpeg")
viewLounge.photos.attach(io: viewLounge3, filename: "viewLounge3.jpg")

viewLounge4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/viewLounge4.jpeg")
viewLounge.photos.attach(io: viewLounge4, filename: "viewLounge4.jpg")

amber1 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/amber1.jpeg")
amber.photos.attach(io: amber1, filename: "amber1.jpg")

amber2 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/amber2.jpeg")
amber.photos.attach(io: amber2, filename: "amber2.jpg")

amber3 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/amber3.jpeg")
amber.photos.attach(io: amber3, filename: "amber3.jpg")

amber4 = open("https://yelpit-seeds.s3-us-west-1.amazonaws.com/amber4.jpeg")
amber.photos.attach(io: amber4, filename: "amber4.jpg")


