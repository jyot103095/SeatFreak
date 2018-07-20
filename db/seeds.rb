# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Ticket.destroy_all
Event.destroy_all
Performer.destroy_all
Venue.destroy_all
User.destroy_all

drake = Performer.create(name: "Drake", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/drake.jpeg')
# drake.photo.attach(io: file, filename: 'drake.jpeg')
# drake.save!
migos = Performer.create(name: "Migos", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/migos.jpeg')
# migos.photo.attach(io: file, filename: 'migos.jpeg')
# migos.save!
kanye = Performer.create(name: "Kanye West", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/kanye.jpeg')
# kanye.photo.attach(io: file, filename: 'kanye.jpeg')
# kanye.save!
jayz = Performer.create(name: "Jay-Z", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/jayz.jpeg')
# jayz.photo.attach(io: file, filename: 'jayz.jpeg')
# jayz.save!
jcole = Performer.create(name: "J. Cole", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/jcole.jpeg')
# jcole.photo.attach(io: file, filename: 'jcole.jpeg')
# jcole.save!
childish = Performer.create(name: "Childish Gambino", classification: "Music", category: "Hip-Hop")
# file = File.open('./app/assets/images/childish.jpg')
# childish.photo.attach(io: file, filename: 'childish.jpg')
# childish.save!
sheeran = Performer.create(name: "Ed Sheeran", classification: "Music", category: "Pop")
# file = File.open('./app/assets/images/sheeran.jpg')
# sheeran.photo.attach(io: file, filename: 'sheeran.jpg')
# sheeran.save!
taylor = Performer.create(name: "Taylor Swift", classification: "Music", category: "Pop")
# file = File.open('./app/assets/images/taylor.jpeg')
# taylor.photo.attach(io: file, filename: 'taylor.jpeg')
# taylor.save!
beyonce = Performer.create(name: "Beyonce", classification: "Music", category: "Pop")
# file = File.open('./app/assets/images/beyonce.jpg')
# beyonce.photo.attach(io: file, filename: 'beyonce.jpg')
# beyonce.save!
maroon = Performer.create(name: "Maroon 5", classification: "Music", category: "Pop")
# file = File.open('./app/assets/images/maroon.jpg')
# maroon.photo.attach(io: file, filename: 'maroon.jpg')
# maroon.save!
onerep = Performer.create(name: "OneRepublic", classification: "Music", category: "Pop")
# file = File.open('./app/assets/images/onerepublic.jpeg')
# onerep.photo.attach(io: file, filename: 'onerepublic.jpeg')
# onerep.save!
hardwell = Performer.create(name: "Hardwell", classification: "Music", category: "Electronic")
# file = File.open('./app/assets/images/hardwell.jpg')
# hardwell.photo.attach(io: file, filename: 'hardwell.jpg')
# hardwell.save!
aoki = Performer.create(name: "Steve Aoki", classification: "Music", category: "Electronic")
# file = File.open('./app/assets/images/aoki.jpg')
# aoki.photo.attach(io: file, filename: 'aoki.jpg')
# aoki.save!

united = Performer.create(name: "Manchester United", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/united.jpg')
# united.photo.attach(io: file, filename: 'united.jpg')
# united.save!
city = Performer.create(name: "Manchester City", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/city.png')
# city.photo.attach(io: file, filename: 'city.png')
# city.save!
liverpool = Performer.create(name: "Liverpool", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/liverpool.jpg')
# liverpool.photo.attach(io: file, filename: 'liverpool.jpg')
# liverpool.save!
arsenal = Performer.create(name: "Arsenal", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/arsenal.jpg')
# arsenal.photo.attach(io: file, filename: 'arsenal.jpg')
# arsenal.save!
chelsea = Performer.create(name: "Chelsea", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/chelsea.jpg')
# chelsea.photo.attach(io: file, filename: 'chelsea.jpg')
# chelsea.save!
tottenham = Performer.create(name: "Tottenham Hotspur", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/tottenham.jpg')
# tottenham.photo.attach(io: file, filename: 'tottenham.jpg')
# tottenham.save!
madrid = Performer.create(name: "Real Madrid", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/madrid.jpg')
# madrid.photo.attach(io: file, filename: 'madrid.jpg')
# madrid.save!
barca = Performer.create(name: "Barcelona", classification: "Sports", category: "Soccer")
# file = File.open('./app/assets/images/barca.jpg')
# barca.photo.attach(io: file, filename: 'barca.jpg')
# barca.save!

lakers = Performer.create(name: "Los Angeles Lakers", classification: "Sports", category: "Basketball")
# file = File.open('./app/assets/images/lakers.jpg')
# lakers.photo.attach(io: file, filename: 'lakers.jpg')
# lakers.save!
thunder = Performer.create(name: "Oklahoma City Thunder", classification: "Sports", category: "Basketball")
# file = File.open('./app/assets/images/thunger.jpg')
# thunger.photo.attach(io: file, filename: 'thunger.jpg')
# thunger.save!
sixers = Performer.create(name: "Philadelphia 76ers", classification: "Sports", category: "Basketball")
# file = File.open('./app/assets/images/sixers.jpg')
# sixers.photo.attach(io: file, filename: 'sixers.jpg')
# sixers.save!
knicks = Performer.create(name: "New York Knicks", classification: "Sports", category: "Basketball")
# file = File.open('./app/assets/images/knicks.jpg')
# knicks.photo.attach(io: file, filename: 'knicks.jpg')
# knicks.save!
nets = Performer.create(name: "Brooklyn Nets", classification: "Sports", category: "Basketball")
# file = File.open('./app/assets/images/nets.jpg')
# nets.photo.attach(io: file, filename: 'nets.jpg')
# nets.save!

giants = Performer.create(name: "New York Giants", classification: "Sports", category: "Football")
# file = File.open('./app/assets/images/giants.jpg')
# giants.photo.attach(io: file, filename: 'giants.jpg')
# giants.save!
eagles = Performer.create(name: "Philadelphia Eagles", classification: "Sports", category: "Football")
# file = File.open('./app/assets/images/eagles.jpg')
# eagles.photo.attach(io: file, filename: 'eagles.jpg')
# eagles.save!
patriots = Performer.create(name: "New England Patriots", classification: "Sports", category: "Football")
# file = File.open('./app/assets/images/patriots.jpg')
# patriots.photo.attach(io: file, filename: 'patriots.jpg')
# patriots.save!
cowboys = Performer.create(name: "Dallas Cowboys", classification: "Sports", category: "Football")
# file = File.open('./app/assets/images/cowboys.jpg')
# cowboys.photo.attach(io: file, filename: 'cowboys.jpg')
# cowboys.save!

madison = Venue.create(name: "Madison Square Garden", address: "4 Pennsylvania Plaza, New York, NY 10001", city: "New York, NY")
# file = File.open('./app/assets/images/madison.jpg')
# madison.photo.attach(io: file, filename: 'madison.jpg')
# madison.save!
wellsfargo = Venue.create(name: "Wells Fargo Center", address: "3601 S Broad St, Philadelphia, PA 19148", city: "Philadelphia, PA")
# file = File.open('./app/assets/images/wellsfargo.jpg')
# wellsfargo.photo.attach(io: file, filename: 'wellsfargo.jpg')
# wellsfargo.save!
metlife = Venue.create(name: "Metlife Stadium", address: "1 MetLife Stadium Dr, East Rutherford, NJ 07073", city: "East Rutherford, NJ")
# file = File.open('./app/assets/images/metlife.jpg')
# metlife.photo.attach(io: file, filename: 'metlife.jpg')
# metlife.save!
lincoln = Venue.create(name: "Lincoln Financial Field", address: "1 Lincoln Financial Field Way, Philadelphia, PA 19148", city: "Philadelphia, PA")
# file = File.open('./app/assets/images/lincoln.jpg')
# lincoln.photo.attach(io: file, filename: 'lincoln.jpg')
# lincoln.save!
levis = Venue.create(name: "Levi's Stadium", address: "4900 Marie P DeBartolo Way, Santa Clara, CA 95054", city: "Santa Clara, CA")
# file = File.open('./app/assets/images/levis.jpeg')
# levis.photo.attach(io: file, filename: 'levis.jpeg')
# levis.save!
bighouse = Venue.create(name: "Big House Stadium", address: "1201 South Main Street, Ann Arbor, MI 48104", city: "Ann Arbor, MI")
# file = File.open('./app/assets/images/bighouse.jpeg')
# bighouse.photo.attach(io: file, filename: 'bighouse.jpeg')
# bighouse.save!
beaver = Venue.create(name: "Beaver Stadium", address: "1 Beaver Stadium, University Park, PA 16802", city: "University Park, PA")
# file = File.open('./app/assets/images/beaver.jpg')
# beaver.photo.attach(io: file, filename: 'beaver.jpg')
# beaver.save!
oldtrafford = Venue.create(name: "Old Trafford", city: "Manchester", address: "Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK")
# file = File.open('./app/assets/images/oldtrafford.jpg')
# oldtrafford.photo.attach(io: file, filename: 'oldtrafford.jpg')
# oldtrafford.save!
anfield = Venue.create(name: "Anfield", city: "Liverpool", address: "Anfield Rd, Liverpool L4 0TH, UK")
# file = File.open('./app/assets/images/anfield.jpg')
# anfield.photo.attach(io: file, filename: 'anfield.jpg')
# anfield.save!
etihad = Venue.create(name: "Etihad Stadium", city: "Manchester", address: "Ashton New Rd, Manchester M11 3FF, UK")
# file = File.open('./app/assets/images/etihad.jpg')
# etihad.photo.attach(io: file, filename: 'etihad.jpg')
# etihad.save!
emirates = Venue.create(name: "Emirates Stadium", city: "London", address: "Hornsey Rd, London N7 7AJ, UK")
# file = File.open('./app/assets/images/emirates.jpg')
# emirates.photo.attach(io: file, filename: 'emirates.jpg')
# emirates.save!

eventTitles = [
  ["Drake with Migos", [drake, migos]],
  ["Taylor Swift", [taylor]],
  ["Childish Gambino", [childish]],
  ["Jay-Z with Beyonce", [jayz, beyonce]],
  ["Ed Sheeran", [sheeran]],
  ["One OneRepublic", [onerep]],
  ["Maroon 5", [maroon]],
  ["Steve Aoki", [aoki]],
  ["Hardwell", [hardwell]],
  ["Kanye West", [kanye]],
  ["J. Cole", [jcole]]
]

soccer_teams = [arsenal, united, liverpool, city, madrid, tottenham, chelsea, barca]
soccer_stadiums = [oldtrafford, anfield, etihad, emirates]

basketball_teams = [knicks, lakers, sixers, thunder, nets]
basketball_stadiums = [madison, wellsfargo]

football_teams = [giants, cowboys, patriots, eagles]
football_stadiums = [metlife, lincoln, levis, bighouse, beaver]

venue_ids = Venue.ids

200.times do |i|
  event = eventTitles.sample
  new_event = Event.create(title: event.first, event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night), venue_id: venue_ids.sample)
  new_event.performers = event.last
end

112.times do |i|
  team1 = soccer_teams.sample
  team2 = soccer_teams.sample
  unless team2 != team1
    team2 = soccer_teams.sample
  end
  event_title = team1.name + " vs " + team2.name
  stadium = soccer_stadiums.sample.id

  new_event = Event.create(title: event_title, event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night), venue_id: stadium)
  new_event.performers = [team1, team2]
end

40.times do |i|
  team1 = basketball_teams.sample
  team2 = basketball_teams.sample
  unless team2 != team1
    team2 = basketball_teams.sample
  end
  event_title = team1.name + " vs " + team2.name
  stadium = basketball_stadiums.sample.id

  new_event = Event.create(title: event_title, event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night), venue_id: stadium)
  new_event.performers = [team1, team2]
end

40.times do |i|
  team1 = football_teams.sample
  team2 = football_teams.sample
  unless team2 != team1
    team2 = football_teams.sample
  end
  event_title = team1.name + " vs " + team2.name
  stadium = football_stadiums.sample.id

  new_event = Event.create(title: event_title, event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night), venue_id: stadium)
  new_event.performers = [team1, team2]
end

User.create(email: "hunter2@gmail.com", password: "hunter2", f_name: "Hunter", l_name: "Hunter")

50.times do |i|
  User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
end


1000.times do |n|
  user_id = User.ids.sample
  event_id = Event.ids.sample
  section = Faker::Number.between(1, 300)
  row = Faker::Number.between(1, 30)
  seat = Faker::Number.between(1, 15)
  price = Faker::Number.between(15, 350)
  on_sale = true

  Ticket.create(user_id: user_id, event_id: event_id, section: section, row: row, price: price, on_sale: on_sale)
end
