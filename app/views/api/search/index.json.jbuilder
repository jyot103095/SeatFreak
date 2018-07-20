json.events ({})
json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
    end
  end
end

json.performers ({})
json.performers do
  @performers.each do |performer|
    json.set! performer.id do
      json.extract! performer, :id, :name, :category, :classification
    end
  end
end

json.venues ({})
json.venues do
  @venues.each do |venue|
    json.set! venue.id do
      json.extract! venue, :id, :name, :city, :address
    end
  end
end
