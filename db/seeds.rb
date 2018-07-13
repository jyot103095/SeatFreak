# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ticket.destroy_all
Event.destroy_all
Performer.destroy_all

drake = Performer.create(name: "Drake", classification: "Music", category: "Hip-Hop")
migos = Performer.create(name: "Migos", classification: "Music", category: "Hip-Hop")
Performer.create(name: "Kanye West", classification: "Music", category: "Hip-Hop")
Performer.create(name: "Jay-Z", classification: "Music", category: "Hip-Hop")
Performer.create(name: "J. Cole", classification: "Music", category: "Hip-Hop")
Performer.create(name: "Childish Gambino", classification: "Music", category: "Hip-Hop")
Performer.create(name: "Ed Sheeran", classification: "Music", category: "Pop")
Performer.create(name: "Taylor Swift", classification: "Music", category: "Pop")
Performer.create(name: "Beyonce", classification: "Music", category: "Pop")
Performer.create(name: "Maroon 5", classification: "Music", category: "Pop")
Performer.create(name: "OneRepublic", classification: "Music", category: "Pop")
united = Performer.create(name: "Manchester United", classification: "Sports", category: "Soccer")
city = Performer.create(name: "Manchester City", classification: "Sports", category: "Soccer")
Performer.create(name: "Liverpool", classification: "Sports", category: "Soccer")
Performer.create(name: "Arsenal", classification: "Sports", category: "Soccer")
Performer.create(name: "Los Angeles Lakers", classification: "Sports", category: "NBA")
Performer.create(name: "Oklahoma City Thunder", classification: "Sports", category: "NBA")
Performer.create(name: "Philadelphia 76ers", classification: "Sports", category: "NBA")
Performer.create(name: "New York Knicks", classification: "Sports", category: "NBA")
Performer.create(name: "Brooklyn Nets", classification: "Sports", category: "NBA")

drakeMigos = Event.create(title: "Drake with Migos", event_on: Time.parse("Sat Sep 15 20:00:00 EST"))
drakeMigos.performers = [drake, migos]
drakeMigos = Event.create(title: "Drake with Migos", event_on: Time.parse("Fri Aug 24 19:00:00 EST"))
drakeMigos.performers = [drake, migos]
cityUnited = Event.create(title: "Manchester United vs Manhchester City", event_on: Time.parse("Fri Jul 13 18:00:00 EST"))
cityUnited.performers = [united, city]
