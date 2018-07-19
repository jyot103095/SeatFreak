json.events ({})
json.events do
  @events.each do |pg_event|
    event = pg_event.searchable
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
    end
  end
end

json.performers ({})
json.performers do
  @performers.each do |pg_performer|
    performer = pg_performer.searchable
    json.set! performer.id do
      json.extract! performer, :id, :name
    end
  end
end

json.venues ({})
json.venues do
  @venues.each do |pg_venue|
    venue = pg_venue.searchable
    json.set! venue.id do
      json.extract! venue, :id, :name
    end
  end
end
