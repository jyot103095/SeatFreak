json.event do
  json.extract! @event, :id, :title
  json.eventOn @event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
  json.ticketIds @event.ticket_ids
end

json.tickets({})
json.tickets do
  @event.tickets.where(on_sale: true).each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
      json.eventId ticket.event_id
    end
  end
end
