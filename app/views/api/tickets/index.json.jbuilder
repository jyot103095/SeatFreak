json.tickets do
  @tickets.each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
      json.eventId ticket.event_id
      json.onSale ticket.on_sale
    end
  end
end

json.events do
  @tickets.each do |ticket|
    json.set! ticket.event.id do
      json.extract! ticket.event, :id, :title
      json.eventOn ticket.event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
      json.ticketIds ticket.event.ticket_ids
    end
  end
end
