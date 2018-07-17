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
aoki = Performer.create(name: "aoki", classification: "Music", category: "Electronic")
united = Performer.create(name: "Manchester United", classification: "Sports", category: "Soccer")
city = Performer.create(name: "Manchester City", classification: "Sports", category: "Soccer")
liverpool = Performer.create(name: "Liverpool", classification: "Sports", category: "Soccer")
arsenal = Performer.create(name: "Arsenal", classification: "Sports", category: "Soccer")
lakers = Performer.create(name: "Los Angeles Lakers", classification: "Sports", category: "Basketball")
thunder = Performer.create(name: "Oklahoma City Thunder", classification: "Sports", category: "Basketball")
sixers = Performer.create(name: "Philadelphia 76ers", classification: "Sports", category: "Basketball")
knicks = Performer.create(name: "New York Knicks", classification: "Sports", category: "Basketball")
nets = Performer.create(name: "Brooklyn Nets", classification: "Sports", category: "Basketball")

drakeMigos = Event.create(title: "Drake with Migos", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
drakeMigos.performers = [drake, migos]

drakeMigos = Event.create(title: "Drake with Migos", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
drakeMigos.performers = [drake, migos]

cityUnited = Event.create(title: "Manchester United vs Manchester City", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
cityUnited.performers = [united, city]

concert1 = Event.create(title: "Taylor Swift", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
concert1.performers = [taylor]

concert2 = Event.create(title: "Maroon 5", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
concert2.performers = [maroon]

concert3 = Event.create(title: "OneRepublic", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
concert3.performers = [onerep]

concert4 = Event.create(title: "Jay-z with Beyonce", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
concert4.performers = [jayz, beyonce]

nba1 = Event.create(title: "Thunder at Knicks", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
nba1.performers = [knicks, thunder]

nba2 = Event.create(title: "Thunder at Knicks", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
nba2.performers = [nets, lakers]

icc1 = Event.create(title: "Manchester United vs Manchester City", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
icc1.performers = [city, united]

icc2 = Event.create(title: "Arsenal vs Liverpool", event_on: Faker::Time.between(4.weeks.after, 4.weeks.after + 1.year, :night))
icc2.performers = [arsenal, liverpool]

User.create(email: "hunter2@gmail.com", password: "hunter2", f_name: "Hunter", l_name: "Hunter")
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)
User.create(email: Faker::Internet.email, password: "hunter2", f_name: Faker::Name.unique.name, l_name: Faker::Name.unique.last_name)

100.times do |n|
  user_id = User.ids.sample
  event_id = Event.ids.sample
  section = Faker::Number.between(1, 300)
  row = Faker::Number.between(1, 30)
  seat = Faker::Number.between(1, 15)
  price = Faker::Number.between(15, 350)
  on_sale = true

  Ticket.create(user_id: user_id, event_id: event_id, section: section, row: row, price: price, on_sale: on_sale)
end
