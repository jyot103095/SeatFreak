json.extract! @venue, :id, :name, :city, :address

json.events ({})
json.events do
  @venue.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
      json.ticketIds event.ticket_ids
      json.venueId event.venue_id
    end
  end
end
