json.event do
  json.extract! @event, :id, :title
  json.event_on @event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
  json.ticketIds @event.ticket_ids
end

json.tickets do
  @event.tickets.each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
    end
  end
end
