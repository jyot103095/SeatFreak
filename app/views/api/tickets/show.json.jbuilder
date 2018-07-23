json.ticket do
  json.extract! @ticket, :id, :section, :row, :seat, :price
  json.eventId @ticket.event_id
  json.onSale @ticket.on_sale
  json.expired (Time.now > @ticket.event.event_on)
end

json.event do
  json.extract! @ticket.event, :id, :title
  json.eventOn @ticket.event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
end
