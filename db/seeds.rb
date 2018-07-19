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

drake = Performer.create(name: "Drake", classification: "Music", category: "Hip-Hop")
migos = Performer.create(name: "Migos", classification: "Music", category: "Hip-Hop")
kanye = Performer.create(name: "Kanye West", classification: "Music", category: "Hip-Hop")
jayz = Performer.create(name: "Jay-Z", classification: "Music", category: "Hip-Hop")
jcole = Performer.create(name: "J. Cole", classification: "Music", category: "Hip-Hop")
childish = Performer.create(name: "Childish Gambino", classification: "Music", category: "Hip-Hop")
sheeran = Performer.create(name: "Ed Sheeran", classification: "Music", category: "Pop")
taylor = Performer.create(name: "Taylor Swift", classification: "Music", category: "Pop")
beyonce = Performer.create(name: "Beyonce", classification: "Music", category: "Pop")
maroon = Performer.create(name: "Maroon 5", classification: "Music", category: "Pop")
onerep = Performer.create(name: "OneRepublic", classification: "Music", category: "Pop")
hardwell = Performer.create(name: "Hardwell", classification: "Music", category: "Electronic")
aoki = Performer.create(name: "Steve Aoki", classification: "Music", category: "Electronic")

united = Performer.create(name: "Manchester United", classification: "Sports", category: "Soccer")
city = Performer.create(name: "Manchester City", classification: "Sports", category: "Soccer")
liverpool = Performer.create(name: "Liverpool", classification: "Sports", category: "Soccer")
arsenal = Performer.create(name: "Arsenal", classification: "Sports", category: "Soccer")
chelsea = Performer.create(name: "Chelsea", classification: "Sports", category: "Soccer")
tottenham = Performer.create(name: "Tottenham Hotspur", classification: "Sports", category: "Soccer")
madrid = Performer.create(name: "Real Madrid", classification: "Sports", category: "Soccer")
barca = Performer.create(name: "Barca", classification: "Sports", category: "Soccer")

lakers = Performer.create(name: "Los Angeles Lakers", classification: "Sports", category: "Basketball")
thunder = Performer.create(name: "Oklahoma City Thunder", classification: "Sports", category: "Basketball")
sixers = Performer.create(name: "Philadelphia 76ers", classification: "Sports", category: "Basketball")
knicks = Performer.create(name: "New York Knicks", classification: "Sports", category: "Basketball")
nets = Performer.create(name: "Brooklyn Nets", classification: "Sports", category: "Basketball")

giants = Performer.create(name: "New York Giants", classification: "Sports", category: "Football")
eagles = Performer.create(name: "Philadelphia Eagles", classification: "Sports", category: "Football")
patriots = Performer.create(name: "New England Patriots", classification: "Sports", category: "Football")
vikings = Performer.create(name: "Minnesota Vikings", classification: "Sports", category: "Football")

madison = Venue.create(name: "Madison Square Garden", address: "4 Pennsylvania Plaza, New York, NY 10001", city: "New York, NY")
wellsfargo = Venue.create(name: "Wells Fargo Center", address: "3601 S Broad St, Philadelphia, PA 19148", city: "Philadelphia, PA")
metlife = Venue.create(name: "Metlife Stadium", address: "1 MetLife Stadium Dr, East Rutherford, NJ 07073", city: "East Rutherford, NJ")
lincoln = Venue.create(name: "Lincoln Financial Field", address: "1 Lincoln Financial Field Way, Philadelphia, PA 19148", city: "Philadelphia, PA")
levis = Venue.create(name: "Levi's Stadium", address: "4900 Marie P DeBartolo Way, Santa Clara, CA 95054", city: "Santa Clara, CA")
bighouse = Venue.create(name: "Big House Stadium", address: "1201 South Main Street, Ann Arbor, MI 48104", city: "Ann Arbor, MI")
beaver = Venue.create(name: "Beaver Stadium", address: "1 Beaver Stadium, University Park, PA 16802", city: "University Park, PA")
oldtrafford = Venue.create(name: "Old Trafford", city: "Manchester", address: "Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK")
anfield = Venue.create(name: "Anfield", city: "Liverpool", address: "Anfield Rd, Liverpool L4 0TH, UK")
etihad = Venue.create(name: "Etihad Stadium", city: "Manchester", address: "Ashton New Rd, Manchester M11 3FF, UK")
emirates = Venue.create(name: "Emirates Stadium", city: "London", address: "Hornsey Rd, London N7 7AJ, UK")

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

football_teams = [giants, vikings, patriots, eagles]
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
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)

2000.times do |n|
  user_id = User.ids.sample
  event_id = Event.ids.sample
  section = Faker::Number.between(1, 300)
  row = Faker::Number.between(1, 30)
  seat = Faker::Number.between(1, 15)
  price = Faker::Number.between(15, 350)
  on_sale = true

  Ticket.create(user_id: user_id, event_id: event_id, section: section, row: row, price: price, on_sale: on_sale)
end
