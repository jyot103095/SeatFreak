json.events do
  json.set! @event.id do
    json.extract! @event, :id, :title, :date, :time
    json.ticketIds @event.ticket_ids
  end
end

json.tickets do
  @event.tickets.each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
    end
  end
end
