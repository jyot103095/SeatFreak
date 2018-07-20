json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
      json.performers event.performer_ids
      json.venueId event.venue.id
    end
  end
end

json.venues do
  @events.each do |event|
    json.set! event.venue.id do
      json.extract! event.venue, :id, :name, :city, :address
      json.photoUrl url_for(event.venue.photo)
    end
  end
end

json.performers do
  @events.each do |event|
    event.performers.each do |performer|
      json.set! performer.id do
        json.extract! performer, :id, :name, :category, :classification
        json.photoUrl url_for(performer.photo)
      end
    end
  end
end
