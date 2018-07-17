json.performers do
  json.extract! @performer, :id, :name, :classification, :category, :description
  json.eventsIds @performer.event_ids
end

json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn @event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
    end
  end
end
