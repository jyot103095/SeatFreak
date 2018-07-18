json.performer do
  json.extract! @performer, :id, :name, :classification, :category, :description
  json.events @performer.event_ids
end

json.events({})
json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
      json.performers event.performer_ids
      json.venueId event.venue_id
    end
  end
end


json.venues({})
json.venues do
  @performer.events.each do |event|
    json.set! event.venue.id do
      json.extract! event.venue, :id, :name, :city, :address
    end
  end
end
