# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data"
Radio.destroy_all
User.destroy_all

all_radios = JSON.parse(File.read(Rails.root.join('./radios.json')))['radios']

all_radios.each do |radio|

    Radio.create(
    img: radio["image_url"],
    name: radio["name"],
    uri: radio["uri"], 
    channel_id: radio["channel_id"],  
    countryCode: radio["countryCode"],   
    genre: radio["genre"]
    )
end

crashedout = User.create(username: "CrashedOut", email: "Crash@gmail.com")

puts "Seeding Complete 🪴"