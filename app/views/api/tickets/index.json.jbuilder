json.tickets ({})
json.tickets do
  @tickets.each do |ticket|
    json.set! ticket.id do
      json.extract! ticket, :id, :section, :row, :seat, :price
      json.eventId ticket.event_id
      json.onSale ticket.on_sale
      json.expired (Time.now > ticket.event.event_on)
    end
  end
end

json.events ({})
json.events do
  @tickets.each do |ticket|
    json.set! ticket.event.id do
      json.extract! ticket.event, :id, :title
      json.eventOn ticket.event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
      json.performers ticket.event.performer_ids
    end
  end
end
