# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Review.destroy_all
City.destroy_all
User.destroy_all

atlanta = City.new
atlanta.name = "Atlanta"
atlanta.image = "http://www.bazaardaily.co.uk/wp-content/uploads/2017/09/Atlanta_Flip_or_Flop.jpg"
atlanta.save

chicago = City.new
chicago.name = "Chicago"
chicago.image = "http://www.vivecampus.com/_assets/uichicago/_img/university-of-illinois-chicago-english-program-schema.jpg"
chicago.save

newyork = City.new
newyork.name = "New York"
newyork.image = "https://www.engineerbabu.com/blog/wp-content/uploads/2015/10/newyork-1.jpg"
newyork.save

sanfran = City.new
sanfran.name = "San Francisco"
sanfran.image ="https://raw.githubusercontent.com/Scottl4784/vagabond/vagabond/release1.0.1/client/src/images/sanfran.jpg"
sanfran.save

User.create(name: "Mike", email_id: "mike@12.com")

Review.create(title: "Hotlanta", author: User.first.name, city_id: City.first.id, user_id: User.first.id, comment:"Atlanta - Hollywood of the South!")

