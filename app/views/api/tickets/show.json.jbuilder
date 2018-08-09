json.ticket do
  json.extract! @ticket, :id, :section, :row, :seat, :price
  json.eventId @ticket.event_id
  json.onSale @ticket.on_sale
  json.expired (Time.now > @ticket.event.event_on)
end

json.event do
  json.extract! @ticket.event, :id, :title
  json.eventOn @ticket.event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
  json.performers @ticket.event.performer_ids
  json.venueId @ticket.event.venue_id
  json.photoUrl url_for(@ticket.event.photo)
end

json.venue do
	json.extract! @ticket.event.venue, :id, :name
end
