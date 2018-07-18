json.performers do
  @performers.each do |performer|
    json.set! performer.id do
      json.extract! performer, :id, :name, :category, :classification
      json.events performer.event_ids
    end
  end
end

json.events({})
json.events do
  @performers.each do |performer|
    performer.events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :title
        json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
        json.performers event.performer_ids
        json.venueId event.venue_id
      end
    end
  end
end

json.venues ({})
json.venues do
  @performers.each do |performer|
    performer.events.each do |event|
      json.set! event.venue.id do
        json.extract! event.venue, :id, :name, :city, :address
      end
    end
  end
end
