json.event do
  json.extract! @event, :id, :title
  json.eventOn @event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
  json.ticketIds @event.ticket_ids
  json.performers @event.performer_ids
  json.venueId @event.venue_id
  json.photoUrl url_for(@event.photo)
end

json.venues do
  json.set! @event.venue.id do
    json.extract! @event.venue, :id, :name, :city, :address
  end
end

json.tickets({})
json.tickets do
  tickets = logged_in ? @event.tickets.where(on_sale: true).where.not(user_id: current_user.id) : @event.tickets.where(on_sale: true)
  tickets.each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
      json.eventId ticket.event_id
      json.onSale ticket.on_sale
      json.expired (Time.now > @event.event_on)
    end
  end
end
