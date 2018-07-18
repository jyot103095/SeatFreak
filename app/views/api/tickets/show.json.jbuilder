json.extract! @ticket, :id, :section, :row, :seat, :price
json.eventId @ticket.event_id
json.onSale @ticket.on_sale
json.expired (Time.now > @ticket.event.event_on)
