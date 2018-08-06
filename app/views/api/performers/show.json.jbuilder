json.performer do
  json.extract! @performer, :id, :name, :classification, :category, :description
  json.events @performer.event_ids
  json.photoUrl url_for(@performer.photo)
end

json.events({})
json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
      json.performers event.performer_ids
      json.venueId event.venue_id
      json.photoUrl url_for(event.photo)
    end
  end
end


json.venues({})
json.venues do
  @performer.events.each do |event|
    json.set! event.venue.id do
      json.extract! event.venue, :id, :name, :city, :address
      json.photoUrl url_for(event.venue.photo)
    end
  end
end
